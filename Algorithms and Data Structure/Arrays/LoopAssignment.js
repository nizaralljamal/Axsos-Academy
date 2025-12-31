console.log("Write a for loop to print numbers from 1 to 10.");
console.log("------------------------------------------------------");

for (i = 1; i <= 10; i++) {
  console.log(i);
}

console.log("------------------------------------------------------");
console.log("Write a for loop to print numbers from 10 to 1.");
console.log("------------------------------------------------------");

for (i = 10; i > 0; i--) {
  console.log(i);
}

console.log("------------------------------------------------------");
console.log("Write a for loop to print all even numbers between 1 and 20.");
console.log("------------------------------------------------------");

for (i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

console.log("------------------------------------------------------");
console.log("------------------------------------------------------");
console.log("Write a for loop to print all Odd numbers between 1 and 20.");
console.log("------------------------------------------------------");

for (i = 1; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  }
}

console.log("------------------------------------------------------");
console.log(
  "Write a for loop to calculate and print the sum of numbers from 1 to 10."
);
console.log("------------------------------------------------------");

let sum = 0;
for (i = 1; i <= 10; i++) {
  sum += i;
}
console.log(sum);

console.log("------------------------------------------------------");
console.log(
  "Write a for loop to print numbers from 1 to 30  If the number is divisible by 3 print `Fizz`  If divisible by 5 print `Buzz`  If divisible by both 3 and 5, print `FizzBuzz`"
);

console.log("------------------------------------------------------");


for(i = 1 ; i<=30 ; i++){
    if(i %3 === 0 && i %5 === 0){
        console.log("FizzBuzz");
    }else if (i %3 === 0) {
        console.log("Fizz");
    }else if (i %5 === 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}