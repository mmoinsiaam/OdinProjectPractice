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

addBookToLibrary("Harry","JK",245,"read");
addBookToLibrary("asd","tqer",211,"not read");

for (let index = 0; index < myLibrary.length; index++) {
    console.log(myLibrary);
    const tempBook = myLibrary[index];
    const temp = document.createElement("div");
    temp.classList.add("book");
    const unordered = document.createElement("ul");
    const Title = document.createElement("li");
    Title.innerText = `Title: ${tempBook.title}`;
    const Author = document.createElement("li");
    Author.innerText = `Author: ${tempBook.author}`;
    const Pages = document.createElement("li");
    Pages.innerText = `Pages: ${tempBook.pages}`;
    const readStat = document.createElement("li");
    readStat.innerText = `Read Status: ${tempBook.readstat}`;
    unordered.appendChild(Title);
    unordered.appendChild(Author);
    unordered.appendChild(Pages);
    unordered.appendChild(readStat);
    temp.appendChild(unordered);
    holder.appendChild(temp);
    console.log("hi");
}