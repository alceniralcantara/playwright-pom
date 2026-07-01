import { Page, Locator } from '@playwright/test';

export default class TodoPage {
  readonly page: Page;
  readonly newTodo: Locator;
  readonly todoItems: Locator;
  readonly toggleAll: Locator;

  constructor(page: Page) {
    this.page = page;
    this.newTodo = page.locator('.new-todo');
    this.todoItems = page.locator('.todo-list li');
    this.toggleAll = page.locator('.toggle-all');
  }

  async goto() {
    await this.page.goto('/');
  }

  async addTodo(text: string) {
    await this.newTodo.fill(text);
    await this.newTodo.press('Enter');
  }

  async getItems(): Promise<string[]> {
    return this.todoItems.allInnerTexts();
  }

  async toggleItem(index: number) {
    const item = this.todoItems.nth(index);
    await item.locator('.toggle').check();
  }

  async removeItem(index: number) {
    const item = this.todoItems.nth(index);
    await item.hover();
    await item.locator('.destroy').click();
  }
}
