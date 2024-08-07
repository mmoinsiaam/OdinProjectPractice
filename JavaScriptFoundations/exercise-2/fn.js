function add7(num) {
    return num + 7;
}

function multiply(num1,num2) {
    return num1 * num2;
}

function capitalize(text) {
    t = text.charAt(0).toUpperCase();
    ext = text.slice(1);
    text = t + ext.toLowerCase();
    return text;
}

function lastLetter(text) {
    let len = text.length;
    return text[len-1];
}

console.log(add7(5));
console.log(multiply(4,3));
console.log(capitalize("TOROROR"));
console.log(capitalize("ashfjhaf"));
console.log(lastLetter("HelperString"));