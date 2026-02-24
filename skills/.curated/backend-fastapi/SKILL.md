---
name: backend-fastapi
description: Develop and maintain FastAPI backends with modular routers, Pydantic validation, persistence layers, testing, and production hardening. Use when requests involve FastAPI endpoints, dependencies, async Python APIs, or backend service design in FastAPI.
---

# FastAPI Development Workflow

## Define boundaries

1. Split API layer, service layer, and repository layer.
2. Keep request/response schemas explicit with Pydantic models.
3. Isolate side effects (DB, cache, external APIs) behind service interfaces.

## Implement endpoints

1. Keep route handlers thin and delegate business logic to services.
2. Validate and transform inputs at boundary level.
3. Use dependency injection for auth, DB sessions, and shared clients.
4. Standardize error mapping into consistent HTTP responses.

## Reliability and operations

1. Add database migration strategy and deterministic startup checks.
2. Expose health/readiness endpoints for deployment environments.
3. Add structured logging with request identifiers.

## Quality gates

1. Add unit tests for services and integration tests for critical routes.
2. Run formatter/linter/type checks and tests.
3. Confirm API contract changes are reflected in generated docs.

