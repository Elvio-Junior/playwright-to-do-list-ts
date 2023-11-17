import { test, expect } from '@playwright/test';
import { ToDoPage } from '../../pages/toDoPage';

test.describe('Realizar testes na pagina ToDos', () => {
    let toDoPage: ToDoPage;

    test.beforeEach(async ({ page }) => {
        toDoPage = new ToDoPage(page);
        await toDoPage.goto(); 
    });

    test('Deve apresentar todos os campos', async ({ page }) => {
        await expect(toDoPage.elements.headerPlaywright).toBeVisible();
        await expect(toDoPage.elements.headerPlaywright).toBeVisible();
        await expect(toDoPage.elements.messageToDoMVC).toBeVisible();
        await expect(toDoPage.elements.inputData).toBeVisible();
    });

    test('Lista de tarefas deve estar vazia', async ({ page }) => {
        await expect(toDoPage.elements.toDoList).toHaveCount(0);
    });

    test('Deve inserir de tarefas na lista', async ({ page }) => {
        await toDoPage.inputToDo('Make Coffe');
        await expect(toDoPage.elements.toDoList).toHaveCount(1);
    });

});