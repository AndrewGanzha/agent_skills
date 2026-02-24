---
name: project-default
description: Repository orchestration skill for vuetemplate. Use for every task in this repository to apply architecture rules and activate vue-best-practices, vue, vueuse-functions, pinia, vue-router-best-practices, vite, and web-design-guidelines based on task intent and touched files.
metadata:
  owner: vuetemplate
  version: "1.0.0"
---

# Project Default

Use this skill for every task in this repository.

## Always-On Rules

- Follow repository architecture from `AGENTS.md`.
- Apply `vue-best-practices` for all Vue-related work.
- Keep logic page-local first, then promote to `shared` only when reused on 2+ pages.
- Preserve dependency flow: `app/pages -> shared`; never `shared -> pages`.

## Activation Matrix

- `vue`: any `.vue` SFC, Composition API, `<script setup>`, or Vue macros.
- `vueuse-functions`: before writing a new utility/composable, check VueUse first.
- `pinia`: `defineStore`, `*.store.ts`, or global state changes.
- `vue-router-best-practices`: `src/app/router/**`, guards, params, and route lifecycle changes.
- `vite`: `vite.config.ts`, build setup, plugins, env/build/SSR config.
- `web-design-guidelines`: only when user asks for UI/UX/accessibility review or audit.

## Conflict Resolution

1. Direct user instruction.
2. `AGENTS.md` repository rules.
3. This orchestrator policy.
4. Individual skill details.

## Execution Checklist

1. Detect user intent and touched files.
2. Activate the minimum matching skills from the matrix.
3. Mention activated skills briefly in the work log/response.
4. Keep edits focused and avoid moving business logic to `shared/ui` or `app`.
