---
name: frontend-react
description: Build and refactor React frontend applications with TypeScript, component architecture, state management, testing, and performance optimization. Use when requests mention React, JSX/TSX, hooks, Next.js pages/components, or React UI behavior.
---

# React Development Workflow

## Apply architecture first

1. Identify app type: SPA, Next.js app router, or widget integration.
2. Keep feature-first structure (`features`, `entities`, `shared`) for medium and large codebases.
3. Separate presentational components from data-fetching and side effects.

## Implement React changes

1. Prefer functional components and hooks.
2. Keep prop contracts explicit with TypeScript interfaces.
3. Avoid derived state duplication; compute from source state with memoization when needed.
4. Keep effects focused: one external concern per `useEffect`.

## State and data

1. Use local state first.
2. Use shared store only for cross-page or cross-feature state.
3. Co-locate API client logic in a dedicated layer and map external DTOs to internal models.

## Quality gates

1. Add or update tests around business logic and critical rendering branches.
2. Validate lint/typecheck/test commands before finalizing.
3. Document non-obvious tradeoffs in code comments near complex logic.

