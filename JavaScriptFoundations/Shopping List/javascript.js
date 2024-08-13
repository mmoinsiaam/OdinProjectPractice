const list = document.querySelector("#list");
const btn = document.querySelector("#btn");
const input = document.querySelector("#item");

btn.addEventListener("click", addItem);

function addItem() {
    let itemName = input.value;
    input.value = '';
    const listItem = document.createElement("li");
    const span = document.createElement("span");
    const deleteBtn = document.createElement("button");

    listItem.appendChild(deleteBtn);
    listItem.appendChild(span);

    list.appendChild(listItem);

    deleteBtn.addEventListener("click", deleteItem);
    input.focus();
}