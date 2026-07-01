import { test, expect } from '../todo.fixture';

test.describe('Todo MVC with POM', () => {
  test('should add todo items', async ({ todoPage }) => {
    await todoPage.addTodo('Task 1');
    await todoPage.addTodo('Task 2');
    const items = await todoPage.getItems();
    expect(items).toEqual(['Task 1', 'Task 2']);
  });

  test('should toggle a todo item', async ({ todoPage }) => {
    await todoPage.addTodo('Task to toggle');
    await todoPage.toggleItem(0);
    await expect(todoPage.todoItems.nth(0)).toHaveClass(/completed/);
  });

  test('should remove a todo item', async ({ todoPage }) => {
    await todoPage.addTodo('Task to remove');
    let items = await todoPage.getItems();
    expect(items).toContain('Task to remove');
    await todoPage.removeItem(0);
    items = await todoPage.getItems();
    expect(items).not.toContain('Task to remove');
  });
});
