---
name: frontend-vue
description: Build and refactor Vue frontend applications with Vue 3, TypeScript, Composition API, state management, testing, and performance optimization. Use when requests mention Vue, SFC components, composables, Pinia, or Vue UI behavior.
---

# Vue Development Workflow

## Load imported references selectively

Use these references from `references/agents` based on task scope:

1. Read `references/agents/vue/SKILL.md` and `references/agents/vue/references/*` for Vue 3 core patterns.
2. Read `references/agents/pinia/SKILL.md` for shared state architecture and advanced store patterns.
3. Read `references/agents/vue-router-best-practices/SKILL.md` for router structure, guards, and navigation rules.
4. Read `references/agents/vite/SKILL.md` for build/dev server/config details.
5. Read `references/agents/vueuse-functions/SKILL.md` and targeted files in `references/agents/vueuse-functions/references/` only for required composables.
6. Read `references/agents/vue-best-practices/SKILL.md` and specific files in `references/agents/vue-best-practices/reference/` for edge-case behavior and performance tuning.
7. Read `references/typescript-advanced-types/SKILL.md` when task includes advanced TypeScript typing: generic abstractions, conditional/mapped/template literal types, deep utility types, or complex inference fixes.

## Establish structure

1. Use Vue 3 Composition API as default.
2. Organize by domain modules and shared UI/utilities.
3. Keep composables focused on reusable behavior, not page-specific wiring.

## Implement Vue changes

1. Keep SFC sections clean: template for layout, script for logic, style for scoped styling.
2. Use typed props and emits contracts.
3. Avoid mutable shared objects across components; prefer explicit reactive sources.
4. Extract large watchers and async flows into composables.

## State and API

1. Use component-local refs/reactive first.
2. Use Pinia for shared app state and cross-module coordination.
3. Normalize backend responses before they reach UI components.

## Quality gates

1. Cover composables and critical UI flows with tests.
2. Run lint, type-check, and test commands before shipping changes.
3. Verify SSR/client hydration constraints when Nuxt or SSR mode is used.
