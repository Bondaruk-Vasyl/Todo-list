import './style.css';

import { showPage } from './pageHandler';

const PAGES = {
    LIST: 'pageList',
    CREATE: 'pageCreate',
    EDIT: 'pageEdit',
};

const UI = {
    goToCreatePageButton: document.getElementById('go-to-create'),
    closeCreatePageButton: document.getElementById('create-close-button'),
};

UI.goToCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.CREATE);
});

UI.closeCreatePageButton.addEventListener('click', () => {
    showPage(PAGES.LIST);
});
