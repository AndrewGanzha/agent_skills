#!/usr/bin/env node

const fs = require("node:fs/promises");
const os = require("node:os");
const path = require("node:path");
const readline = require("node:readline/promises");
const { stdin, stdout, stderr, exit } = require("node:process");

const rootDir = path.resolve(__dirname, "..");
const curatedDir = path.join(rootDir, "skills", ".curated");
const catalogPath = path.join(rootDir, "skills", "catalog.json");

function getDestRoot(customDest) {
  if (customDest) {
    return path.resolve(customDest);
  }
  const codexHome = process.env.CODEX_HOME
    ? path.resolve(process.env.CODEX_HOME)
    : path.join(os.homedir(), ".codex");
  return path.join(codexHome, "skills");
}

async function pathExists(targetPath) {
  try {
    await fs.access(targetPath);
    return true;
  } catch {
    return false;
  }
}

async function loadCatalog() {
  const raw = await fs.readFile(catalogPath, "utf8");
  const data = JSON.parse(raw);
  if (!Array.isArray(data.skills)) {
    throw new Error("catalog.json must contain { skills: [] }");
  }
  return data.skills;
}

function printHelp() {
  stdout.write(
    [
      "Usage:",
      "  skills list [--dest <path>]",
      "  skills add [skill-name ...] [--all] [--dest <path>]",
      "",
      "Examples:",
      "  npx skills list",
      "  npx skills add",
      "  npx skills add frontend-react backend-fastapi",
    ].join("\n") + "\n",
  );
}

async function listSkills(options = {}) {
  const destRoot = getDestRoot(options.dest);
  const catalog = await loadCatalog();

  stdout.write(`Curated skills (${catalog.length}):\n`);
  for (let i = 0; i < catalog.length; i += 1) {
    const item = catalog[i];
    const destination = path.join(destRoot, item.name);
    const installed = await pathExists(destination);
    const suffix = installed ? " (installed)" : "";
    stdout.write(`${i + 1}. ${item.name}${suffix}\n`);
    if (item.title) {
      stdout.write(`   ${item.title}\n`);
    }
  }
}

async function promptSelection(catalog) {
  const rl = readline.createInterface({ input: stdin, output: stdout });
  try {
    stdout.write("Select skills by numbers (comma separated) or type 'all':\n");
    for (let i = 0; i < catalog.length; i += 1) {
      stdout.write(`${i + 1}. ${catalog[i].name}\n`);
    }
    const answer = (await rl.question("> ")).trim().toLowerCase();
    if (answer === "all") {
      return catalog.map((s) => s.name);
    }
    const indexes = answer
      .split(",")
      .map((value) => Number.parseInt(value.trim(), 10))
      .filter((num) => Number.isInteger(num) && num > 0 && num <= catalog.length);
    const unique = [...new Set(indexes)];
    if (unique.length === 0) {
      throw new Error("No valid skills selected.");
    }
    return unique.map((index) => catalog[index - 1].name);
  } finally {
    rl.close();
  }
}

async function installSkill(name, destRoot) {
  const source = path.join(curatedDir, name);
  const destination = path.join(destRoot, name);

  if (!(await pathExists(source))) {
    throw new Error(`Curated skill not found: ${name}`);
  }
  if (await pathExists(destination)) {
    return { name, status: "skipped" };
  }

  await fs.mkdir(destRoot, { recursive: true });
  await fs.cp(source, destination, { recursive: true });
  return { name, status: "installed" };
}

async function addSkills(rawArgs) {
  const names = [];
  let dest;
  let useAll = false;

  for (let i = 0; i < rawArgs.length; i += 1) {
    const token = rawArgs[i];
    if (token === "--all") {
      useAll = true;
      continue;
    }
    if (token === "--dest") {
      const next = rawArgs[i + 1];
      if (!next) {
        throw new Error("Missing value for --dest");
      }
      dest = next;
      i += 1;
      continue;
    }
    if (token.startsWith("--")) {
      throw new Error(`Unknown option: ${token}`);
    }
    names.push(token);
  }

  const catalog = await loadCatalog();
  const availableNames = new Set(catalog.map((item) => item.name));
  let selected = names;

  if (useAll) {
    selected = catalog.map((item) => item.name);
  } else if (selected.length === 0) {
    selected = await promptSelection(catalog);
  }

  for (const name of selected) {
    if (!availableNames.has(name)) {
      throw new Error(`Unknown skill: ${name}`);
    }
  }

  const destRoot = getDestRoot(dest);
  const results = [];
  for (const name of selected) {
    results.push(await installSkill(name, destRoot));
  }

  for (const result of results) {
    stdout.write(`- ${result.name}: ${result.status}\n`);
  }
  stdout.write("Restart Codex to pick up new skills.\n");
}

async function main() {
  const [command, ...rest] = process.argv.slice(2);

  if (!command || command === "-h" || command === "--help" || command === "help") {
    printHelp();
    return;
  }

  if (command === "list") {
    let dest;
    for (let i = 0; i < rest.length; i += 1) {
      if (rest[i] === "--dest") {
        dest = rest[i + 1];
        i += 1;
      } else if (rest[i].startsWith("--")) {
        throw new Error(`Unknown option: ${rest[i]}`);
      }
    }
    await listSkills({ dest });
    return;
  }

  if (command === "add") {
    await addSkills(rest);
    return;
  }

  throw new Error(`Unknown command: ${command}`);
}

main().catch((error) => {
  stderr.write(`Error: ${error.message}\n`);
  exit(1);
});

