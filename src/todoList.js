export function renderTodos(todoList, todoListEl) {
  let displayMessage = '';

  todoList.forEach(function (item, i) {
    displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}' ${item.checked ? 'checked' : ''}>
            <label for='item_${i}'>${item.todo}</label>
        </li>
    `;
  });

  todoListEl.innerHTML = displayMessage;
}
