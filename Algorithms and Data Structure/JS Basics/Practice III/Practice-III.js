
console.log("Basic Function: Write a function called welcome that prints `Welcome to coding!` when called.")
console.log("------------------------------------------------------")



function welcome(param) {
  console.log("Welcome to coding!");
}

welcome();


console.log("------------------------------------------------------")
console.log("With Arguments: Write a function called square that takes a number as input and prints its square.")
console.log("------------------------------------------------------")


function square(param) {
  console.log(`${param * param}`);
}

square(5);

console.log("------------------------------------------------------")
console.log("With Return Value: Write a function called convertToCelsiusthat takes a temperature in Fahrenheit and returns the temperature in Celsius.")
console.log("------------------------------------------------------")


function convertToCelsius(param) {
    param = (param - 32) * (5/9);
    return `${param} C`
}
console.log(convertToCelsius(32));



console.log("------------------------------------------------------")
console.log("Reusable Function: Write a function called isEven that checks if a number is even or odd and returns true or false.")
console.log("------------------------------------------------------")


function isEven(param) {
    if(param % 2 === 0){
        return true;
    }else{
        return false;
    }
}
console.log(isEven(4));

console.log("------------------------------------------------------")
