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

## Attribution (MIT / Third-Party Skills)

The `frontend-vue` skill includes imported third-party materials under:

- `skills/.curated/frontend-vue/references/agents/*`

Credits:

- `vue`, `pinia`, `vite` skills are generated from official Vue/Pinia/Vite sources via scripts by Anthony Fu (`https://github.com/antfu/skills`), as documented in each skill frontmatter.
- `vue-best-practices` and `vue-router-best-practices` are sourced from `vuejs-ai` and include MIT license files with copyright notices:
  - `skills/.curated/frontend-vue/references/agents/vue-best-practices/LICENSE.md`
  - `skills/.curated/frontend-vue/references/agents/vue-router-best-practices/LICENSE.md`
- `vueuse-functions` is authored by SerKo and includes MIT license:
  - `skills/.curated/frontend-vue/references/agents/vueuse-functions/LICENSE.md`
- `web-design-guidelines` metadata credits Vercel (`author: vercel`).

When redistributing this package, keep these notices and included license files intact.

## Add new skill to catalog

1. Create folder `skills/.curated/<skill-name>/SKILL.md`.
2. Add an entry to `skills/catalog.json`.
3. Publish a new npm version.
