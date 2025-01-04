const fn = document.getElementById("fn");
const ln = document.getElementById("ln");
const fname = document.getElementById("namef");
const lname = document.getElementById("lname");
const emlab = document.getElementById("em");
const email = document.getElementById("email");
const plab = document.getElementById("prl");
const pname = document.getElementById("prn");
const conflab = document.getElementById("prl2");
const confname = document.getElementById("prn2");

const baseFn = fn.textContent;
const baseLn = ln.textContent;
const baseEm = emlab.textContent;
const basePass = plab.textContent;
const baseConf = conflab.textContent;

function redder(inp,lab,base) {
    const f1 = document.getElementById(inp);
    const f2 = document.getElementById(lab);
    f1.addEventListener('input', (event) => {
        const textLength = event.target.value.length;
        if (textLength >= 3) {
            f2.textContent = base;
            f2.style.color = "black";
        } else {
            f2.textContent = "*" + base;
            f2.style.color = "red";
        }
      });
}

function handle() {
    const text = confname.value;  
    const check = pname.value;
    if (pname.value.length < 3 || confname.value.length < 3) {
        plab.textContent = "*" + basePass;
        conflab.textContent = "*" + baseConf;
        plab.style.color = "red";
        conflab.style.color = "red";
    }
    else if (!(text === check)){
        plab.textContent = "*" + basePass;
        conflab.textContent = "*" + baseConf;
        plab.style.color = "red";
        conflab.style.color = "red";
    } else {
        if (pname.value.length >= 3) {
            plab.textContent = basePass;
            plab.style.color = "black";
        }
        if (confname.value.length >= 3) {
            conflab.textContent = baseConf;
            conflab.style.color = "black";
        }       
    }
}

confname.addEventListener('input', (e) => {
    handle();
})

pname.addEventListener('input', (e) => {
    handle();
})

email.addEventListener('input', (e) => {
    if (!email.checkValidity()) {
        emlab.textContent = "*" + baseEm;
        emlab.style.color = "red";
    } else {
        emlab.textContent = baseEm;
        emlab.style.color = "black";
    }
});
    


redder("namef","fn",baseFn);
redder("namel","ln",baseLn);
redder("email","em",baseEm);
