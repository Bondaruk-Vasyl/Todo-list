import './style.css';
import './addTitel';

import { showPage } from './pageHandler';

const PAGES = {
    LIST: 'pageList',
    CREATE: 'pageCreate',
    EDIT: 'pageEdit',
};

const UI = {
    goToCreatePageButton: document.getElementById('go-to-create'),
    closeCreatePageButton: document.getElementById('create-close-button'),
    CanselCreatePageButton: document.getElementById('cansel'),
};

UI.goToCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.CREATE);
});

UI.closeCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.LIST);
});

UI.CanselCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.LIST);
});
