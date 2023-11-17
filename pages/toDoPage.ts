import { Locator, Page } from '@playwright/test';

export class ToDoPage {
  readonly page: Page;
  
  elements: {
    headerPlaywright: Locator;
    messageToDoMVC: Locator;
    inputData: Locator;
    toDoList: Locator;  
  };

  constructor(page: Page) {
    this.page = page;
    this.elements = {
        headerPlaywright: page.getByRole('heading', { name: 'todos' }),
        messageToDoMVC: page.getByText('This is just a demo of TodoMVC for testing, not the real TodoMVC app.'),
        inputData: page.getByPlaceholder('What needs to be done?'),
        toDoList: page.getByTestId('todo-title')
    };
  };

  async goto() {
    await this.page.goto('https://demo.playwright.dev/todomvc');
  };

  async inputToDo(toDoItem: string) {
    await this.elements.inputData.fill(toDoItem);
    await this.elements.inputData.press('Enter');
  };

};