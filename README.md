# Playwright POM

This repository demonstrates how to use [Playwright](https://playwright.dev/) with the **Page Object Model (POM)** pattern for end‑to‑end testing of a simple TODO application.

## Project structure

- **package.json** – defines the npm dependencies and scripts.
- **playwright.config.ts** – Playwright configuration (baseURL, test directory, etc.).
- **tsconfig.json** – TypeScript configuration.
- **src/pages/TodoPage.ts** – POM class that represents the Todo page with methods to interact with page elements.
- **todo.fixture.ts** – custom fixture that initializes the page and exposes a `TodoPage` instance to the tests.
- **tests/todo-pom.spec.ts** – automated test suite using the POM.

## Prerequisites

- [Node.js](https://nodejs.org/) (version 16 or higher)
- npm or yarn

## Installation

Clone the repository and install dependencies:

```bash
npm install
```

## Running the tests

To run all tests:

```bash
npx playwright test
```

Playwright will run in headless mode and produce a report. To view the HTML report after the tests:

```bash
npx playwright show-report
```
