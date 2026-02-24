---
name: frontend-vue
description: Build and refactor Vue frontend applications with Vue 3, TypeScript, Composition API, state management, testing, and performance optimization. Use when requests mention Vue, SFC components, composables, Pinia, or Vue UI behavior.
---

# Vue Development Workflow

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

