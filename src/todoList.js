export function renderTodos(todoList, todoListEl) {
    let displayMessage = '';

    todoList.forEach(function (item, i) {
        displayMessage += `
        <li>
            <input type='checkbox' id='item_${i}'  ${item.checked ? 'checked' : ''}>
            <button id='deleted' link>Deleted</button>
            <p for='item_${i}' id='item_${i}' class='date'>1213</p>
            <label for='item_${i}' id='item_${i}' >${item.title}</label>
            <label for='item_${i}' id='item_${i}' >${item.description}</label>
            <label for='item_${i}' id='item_${i}' >${item.dateEnd}</label>
        </li>
    `;
    });

    todoListEl.innerHTML = displayMessage;

}


/* <p for='item_${i}' id='item_${i}' class='date' ${item.createdDate}'>date</p> */
// const d = new Date(year, month, day);
// document.getElementById("date").innerHTML = d;