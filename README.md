# Playwright AI (MCP) — Test Project

This repository is a small Playwright test project that demonstrates using AI (via an MCP-style workflow) to generate and scaffold Playwright tests.

What this is
- A sample web-app test suite implemented with Playwright.
- Includes example prompts and scaffolding for using an AI model (MCP-style) to generate tests.

Repository structure
- `tests/` — Playwright test files (e.g. `form.spec.ts`).
- `prompts/` — AI prompts used to generate tests (`generate_test.prompt.md`, `generate-tests.md`).

Prerequisites
- Node.js 18+ (or compatible LTS)

Setup
1. Install dependencies:

```bash
npm install
```

2. Install Playwright browsers (the test script will also do this automatically):

```bash
npx playwright install --with-deps chromium
```

Run tests

```bash
npm run test
```

This runs Playwright tests and will output a test report. To open the last HTML report manually:

```bash
npx playwright show-report
```

AI / MCP notes
- The `prompts/` folder contains example prompts used to instruct an AI to generate Playwright tests.
- Treat the prompts as examples — adapt them to your project and model setup.

Next steps
- Edit prompts in `prompts/` to customize test generation.
- Integrate with an AI/MCP server or script that consumes the prompts and writes new tests into `tests/`.

License
- No license specified.
