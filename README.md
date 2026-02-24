# skills

CLI package for distributing and installing curated Codex skills.

## Install and run

For local development:

```bash
npm install
node bin/skills.js list
```

For users (after publishing to npm as `skills`):

```bash
npx skills list
npx skills add
npx skills add frontend-react backend-fastapi
```

Installed skills are copied to:

- `$CODEX_HOME/skills` when `CODEX_HOME` is set
- `~/.codex/skills` otherwise

## Curated skills in this repo

- `frontend-react`
- `frontend-vue`
- `backend-fastapi`
- `backend-nestjs`

## Add new skill to catalog

1. Create folder `skills/.curated/<skill-name>/SKILL.md`.
2. Add an entry to `skills/catalog.json`.
3. Publish a new npm version.

