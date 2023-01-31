import { v4 as uuid } from 'uuid';

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
      title: FORM_UI.TITLE_INPUT.value,
      description: FORM_UI.DESCRIPTION_INPUT.value,
      dateEnd: FORM_UI.END_DATE_INPUT.value,
      checked: false,
      id: uuid(),
    };

    addNewTodoItem(newTodo);
  });

  isListenersAdded = true;
};


