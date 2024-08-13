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
    span.textContent = itemName;
    deleteBtn.textContent = "Delete";

    listItem.appendChild(span);
    listItem.appendChild(deleteBtn);

    list.appendChild(listItem);

    deleteBtn.addEventListener("click", function (e) {
        e.target.parentElement.remove();
    });
    input.focus();
}
