const container = document.querySelector("#container");

const content = document.createElement("div");
content.classList.add("content");
content.textContent = "This is the glorious text-content!";

const para = document.createElement("p");
para.classList.add("paragraph");
para.style.color = "red";
para.textContent = "Hey I'm red!";

const headThree = document.createElement("h3");
headThree.classList.add("head3");
headThree.style.color = "blue";
headThree.textContent = "I'm a blue h3!";

const divContainer = document.createElement("div");
divContainer.classList.add("divCont");
divContainer.setAttribute("style","border: 6px solid black; background-color: pink;");

const headOne = document.createElement("h1");
headOne.classList.add("head1");
headOne.textContent = "I'm in a div!";

const para2 = document.createElement("p");
para2.classList.add("para2");
para2.textContent = "ME TOO!";

divContainer.appendChild(headOne);
divContainer.appendChild(para2);

container.appendChild(content);
container.appendChild(para);
container.appendChild(headThree);
container.appendChild(divContainer);
