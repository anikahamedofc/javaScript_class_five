// 1. Ternary Operator
//  if else example
let age = 17;
if (age >= 18) {
  console.log("you are matured");
} else {
  console.log("you are not matured");
}

// example 2
let age2 = 25;
age2 >= 18 ? console.log("Eligible") : console.log("Not Eligible");

// second example
let phoneCharge = 10;
if (phoneCharge >= 100) {
  console.log("Phone is full Charge");
} else if (phoneCharge >= 60) {
  console.log("Phone is Half Charge");
} else if (phoneCharge >= 40) {
  console.log("Phone is low Charge");
} else if (phoneCharge >= 20) {
  console.log("Phone is lower Charge");
} else {
  console.log("Phone Charge is empty");
}
//  Ternary Operator
let mobileCharge = 60;
mobileCharge >= 100 //if condition
  ? console.log("Phone is full Charge")
  : mobileCharge >= 60 //first else-if condition
  ? console.log("Phone is Half Charge")
  : mobileCharge >= 40 //second else-if condition
  ? console.log("Phone is low Charge")
  : mobileCharge >= 20 //Third else-if condition
  ? console.log("Phone is lower Charge") //Fourth else-if condition
  : console.log("Phone Charge is empty"); //if all the conditions fail
// example
let childAge = 10;
let food;
if (childAge >= 11) {
  food = "ice-cream";
} else {
  food = "chicken";
}
console.log(`he likes to eat ${food}`);

console.log(`he likes to eat ${childAge >= 11 ? "chicken" : "ice-cream"}`);

// 2. javaScript Function
// example

function showTime() {
  console.log("your time is 10 am");
}
showTime();

// example

function showName(name) {
  console.log(name);
}
showName("Anik Ahmed");
showName("Bangladesh");
showName("uk");

// example

function calNumber(n1, n2) {
  console.log(n1 * n2);
}
calNumber(5, 3);
calNumber(100, 5);

// example

function avarageMark1(s1, s2, s3, s4, s5) {
  console.log((s1 + s2 + s3 + s4 + s5) / 5);
}
avarageMark1(88, 89, 67, 80, 79);

// example

function avarageMark(s1, s2, s3, s4, s5) {
  const average = (s1 + s2 + s3 + s4 + s5) / 5;
  return average;
}
// console.log(avarageMark(72, 79, 67, 80, 79));
// A student Mark
const aStudent = avarageMark(72, 79, 67, 80, 79);
console.log(aStudent);
// B student Mark
const bStudent = avarageMark(89, 80, 99, 80, 79);
console.log(bStudent);
