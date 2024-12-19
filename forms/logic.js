const name = document.querySelector("#first_name")
const greetBtn = document.querySelector(".greetBtn")
const greet = document.querySelector(".greeting")
const fash = document.querySelector(".trouble")
const cah = document.querySelector(".car")

greetBtn.addEventListener('click', (event) => {
    greet.innerText =  `Hello ${name.value} wearing ${cah.value} sporting ${fash.value}`;
})