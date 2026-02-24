---
name: backend-nestjs
description: Develop and maintain NestJS backends with module-based architecture, DTO validation, service boundaries, testing, and production-grade operational practices. Use when requests involve NestJS controllers, providers, modules, decorators, or backend design in NestJS.
---

# NestJS Development Workflow

## Design modules first

1. Split features into cohesive Nest modules.
2. Keep controllers focused on transport concerns.
3. Place business logic in providers/services with clear interfaces.
4. Keep infrastructure adapters separate from core domain logic.

## Implement APIs

1. Use DTO classes with validation decorators for input contracts.
2. Use guards and interceptors for cross-cutting concerns.
3. Keep exception filters consistent for API error shape.
4. Keep async boundaries explicit and avoid hidden side effects in decorators.

## Data and integration

1. Encapsulate persistence in repository-style providers.
2. Validate external integration payloads before domain mapping.
3. Keep configuration centralized and typed.

## Quality gates

1. Add unit tests for services and e2e tests for public endpoints.
2. Run lint, typecheck, and tests.
3. Validate bootstrap and shutdown hooks for production readiness.

