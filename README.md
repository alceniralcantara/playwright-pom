# Playwright POM

Este repositório demonstra como utilizar o [Playwright](https://playwright.dev/) com o padrão **Page Object Model (POM)** para testes end ‑ end de uma aplicação TODO.

## Estrutura do projeto

- **package.json** – define as dependências e scripts npm.
- **playwright.config.ts** – configurações do Playwright (baseURL, diretório de testes, etc.).
- **tsconfig.json** – configurações do TypeScript.
- **src/pages/TodoPage.ts** – classe POM que representa a página de tarefas com métodos para interagir com os elementos da aplicação.
- **todo.fixture.ts** – fixture personalizada que inicializa a página e expõe uma instância de `TodoPage` para os testes.
- **tests/todo-pom.spec.ts** – conjunto de testes automatizados utilizando o POM.

## Pré ‑ requisitos

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- npm ou yarn

## Instalação

Clone o repositório e instale as dependências:

```bash
npm install
```

## Executando os testes

Para rodar todos os testes:

```bash
npx playwright test
```

Os relatórios HTML serão gerados automaticamente na pasta `playwright-report`.
