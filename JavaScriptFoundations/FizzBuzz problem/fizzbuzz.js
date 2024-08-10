let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz upto: "));

let earr = [];

for(let i = 1; i <= answer; i++) {
    if(i % 3 === 0 && i % 5 === 0){
        console.log("FizzBuzz");
        earr.push("FizzBuzz");
    }
    else if(i % 3 === 0){
        console.log("Fizz");
        earr.push("Fizz");
    }else if(i % 5 === 0){
        console.log("Buzz");
        earr.push("Buzz");   
    }else{
        console.log(i);
        earr.push(i);
    }
}

document.getElementById('list').innerHTML = earr;
