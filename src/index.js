import './style.css';

import { showPage } from './pageHandler';
import { setupCreateTodoHandlers } from './addTodo';
import { renderTodos } from './todoList';

const PAGES = {
    LIST: 'pageList',
    CREATE: 'pageCreate',
    EDIT: 'pageEdit',
};

const UI = {
    goToCreatePageButton: document.getElementById('go-to-create'),
    closeCreatePageButton: document.getElementById('create-close-button'),
    cancelCreatePageButton: document.getElementById('cancel'),
    todoListEl: document.getElementById('todo-list'),
};

let todoList = [];

const addNewTodoItem = item => {
    todoList.push(item);

    localStorage.setItem('todo', JSON.stringify(todoList));
    renderTodos(todoList, UI.todoListEl);
};

const editTodo = () => {
    // **

    localStorage.setItem('todo', JSON.stringify(todoList));
    renderTodos(todoList, UI.todoListEl);
};

const deleteTodo = () => {
    // **

    localStorage.setItem('todo', JSON.stringify(todoList));
    renderTodos(todoList, UI.todoListEl);
};

const markTodoAsDone = () => {
    // **

    localStorage.setItem('todo', JSON.stringify(todoList));
    renderTodos(todoList, UI.todoListEl);
};

UI.goToCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.CREATE);
    setupCreateTodoHandlers(addNewTodoItem);
});

UI.closeCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.LIST);
});

UI.cancelCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.LIST);
});

// main page
if (localStorage.getItem('todo')) {
    todoList = JSON.parse(localStorage.getItem('todo'));
}

renderTodos(todoList, UI.todoListEl);
