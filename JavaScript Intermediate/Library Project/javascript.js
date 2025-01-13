const myLibrary = [];
const holder = document.getElementById("bookholder");

function Book(title,author,pages,readstat) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readstat = readstat;
}

function addBookToLibrary(title,author,pages,readstat) {
    const bookToAdd = new Book(title,author,pages,readstat);
    myLibrary.push(bookToAdd);
    console.log("hasd");
}

for (let index = 0; index < 50; index++) {
    addBookToLibrary("asd" + index,"tqer",index,"Not Read");
}

function remFromLibrary(name) {
    for (let index = 0; index < myLibrary.length; index++) {
        if (myLibrary[index].Title === name) {
            delete myLibrary[index];
        }
    }
}

for (let index = 0; index < myLibrary.length; index++) {
    console.log(myLibrary);
    const tempBook = myLibrary[index];
    const temp = document.createElement("div");
    temp.classList.add("book");
    const Title = document.createElement("p");
    Title.innerText = `Title: ${tempBook.title}`;
    Title.classList.add("title");
    const Author = document.createElement("p");
    Author.innerText = `Author: ${tempBook.author}`;
    const Pages = document.createElement("p");
    Pages.innerText = `Pages: ${tempBook.pages}`;
    const readStat = document.createElement("p");
    readStat.innerText = `Read Status: ${tempBook.readstat}`;
    readStat.classList.add("stat");
    const removeButton = document.createElement("button");
    removeButton.classList.add("remove");
    removeButton.innerText = "Remove";
    const readButton = document.createElement("button");
    readButton.classList.add("statchange");
    readButton.innerText = "Read";

    temp.appendChild(Title);
    temp.appendChild(Author);
    temp.appendChild(Pages);
    temp.appendChild(readStat);
    temp.appendChild(removeButton);
    temp.appendChild(readButton);

    removeButton.addEventListener("click", function(e) {
        const parent = removeButton.parentNode;
        const sibling = parent.querySelector(".title");
        const name = sibling.innerText;
        const titleName = name.split(' ')[1];
        remFromLibrary(titleName);
        parent.remove();
    });

    readButton.addEventListener("click", function(e) {
        const parent = removeButton.parentNode;
        const sibling = parent.querySelector(".stat");
        const stat = sibling.innerText;
        if (stat === "Read Status: Read") {
            sibling.innerText = "Read Status: Not Read";
        }else {
            sibling.innerText = "Read Status: Read";
        }
    });

    holder.appendChild(temp);
    console.log("hi");
}

