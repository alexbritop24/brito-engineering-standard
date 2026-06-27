# Brito Engineering Standard

The Brito Engineering Standard, or BES, is the engineering standard for Alex Brito software companies.

It defines how software should be designed, built, documented, tested, reviewed, released, and maintained.

The goal is not only to ship applications.

The goal is to build software systems that are scalable, maintainable, modular, documented, tested, production-ready, commercially viable, and respected by serious engineering organizations.

## Core Principles

1. Architecture first.
2. Build once, reuse forever.
3. Documentation is part of the product.
4. Every commit should improve the repository.
5. Small improvements compound.
6. Simplicity beats cleverness.
7. Automation beats repetition.
8. Quality creates speed over time.
9. Software should be enjoyable to maintain.
10. Every project should be something we are proud to publish and comfortable handing to another engineer.

## Repository Purpose

This repository contains:

- Engineering standards
- Architecture principles
- Project templates
- Git workflow rules
- Testing standards
- CI/CD standards
- Security standards
- Documentation standards
- Release checklists
- Code review checklists
- Startup engineering playbooks

## Standard Project Requirements

Every serious project should eventually include:

- README.md
- ROADMAP.md
- CHANGELOG.md
- ARCHITECTURE.md
- CONTRIBUTING.md
- LICENSE
- docs/
- tests/
- .github/workflows/
- issue templates
- pull request template
- architecture decision records
- release notes

## Default Engineering Expectations

Projects should use:

- TypeScript strict mode when using TypeScript
- ESLint
- Prettier
- GitHub Actions
- Conventional commits
- Semantic versioning
- Automated formatting
- Deterministic tests for critical logic
- Architecture Decision Records
- Code reviews before merge
- Release notes for meaningful changes

## Architecture Philosophy

Follow Clean Architecture principles.

Separate:

- UI
- Business logic
- Engine
- Services
- Infrastructure
- Persistence
- Configuration

UI should not contain business logic.

Business logic should not depend on UI.

Pure logic should be framework-independent whenever practical.

## Current Status

This repository is in early foundation stage.

Initial focus:

1. Define the BES core standard.
2. Create reusable project templates.
3. Create checklists for new projects and releases.
4. Create GitHub workflow templates.
5. Apply BES to Alex Brito software companies.
