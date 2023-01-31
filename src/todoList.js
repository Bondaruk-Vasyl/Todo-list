export function renderTodos(todoList, todoListEl) {
  let displayMessage = '';

  todoList.forEach(function (item, i) {
    displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}' id='item_${i}' >${item.title}</label>
            <label for='item_${i}' id='item_${i}' >${item.description}</label>
            <label for='item_${i}' id='item_${i}' >${item.dateEnd}</label>
            <p for='item_${i}' id='item_${i}'     >${item.createdDate}</p>
        </li>
    `;
  });

  todoListEl.innerHTML = displayMessage;
}


