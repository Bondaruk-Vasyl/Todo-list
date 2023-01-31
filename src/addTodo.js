import { v4 as uuid } from 'uuid';
import { } from 'string';

let isListenersAdded = false;

export const setupCreateTodoHandlers = addNewTodoItem => {
    if (isListenersAdded) {
        return;
    }

    const FORM_UI = {
        TITLE_INPUT: document.getElementById('task-title'),
        DESCRIPTION_INPUT: document.getElementById('task-description'),
        END_DATE_INPUT: document.getElementById('task-end-date'),
        ADD_BUTTON: document.querySelector('#add-page'),
    };

    FORM_UI.ADD_BUTTON.addEventListener('click', function () {
        let newTodo = {
            todo: FORM_UI.TITLE_INPUT.value,
            checked: false,
            id: uuid(),
            title: string(),
            // description: string
            // dateEnd: string
            // createdDate: string
            // done: boolean
            // deleted: boolean
        };

        addNewTodoItem(newTodo);
    });

    isListenersAdded = true;
};
