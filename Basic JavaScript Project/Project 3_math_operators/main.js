// Function that returns the result of an addition
function addNumbers() {
    // Addition operation
    let sum = 5+7;
    // Display result in the paragraph with id "Math"
    document.getElementById("Math").innerHTML = sum
}
// New Subtraction function
function subtractNumbers() {
    let difference=15-6;
    document.getElementById("Math").innerHTML = difference;
}
// Multiplication function
function multiplyNumbers() {
    let product = 4*5
    document.getElementById("Math").innerHTML = product;
}
//Division function
function divideNumbers() {
    let quotient = 20/4;
    document.getElementById("Math").innerHTML = quotient;
}
//Addition
let addResult=10+5;
document.write("10+5 =" +addResult +"<br>")

//Subtraction
let subResult=20-8;
document.write("20-8 =" +subResult +"<br>")

//Multiplication
let mulResult=6*7;
document.write("6*7 =" +mulResult +"<br>")

//Division
let divResult=40/4;
document.write("40/4 =" +divResult +"<br>")

// Modulus (Remainder)
let modResult=17 % 5;
document.write("17 % 5 =" +modResult +"(remainder)<br>")

// Combined Operations
let combinedResult=(10+2)*3;
document.write("(10+2)*3=" +combinedResult +"<br>")

// Modulus operator examples
let result1 = 10 % 3;
document.write("10 % 3 =" + result1 + "(remainder)<br>");

let result2 = 17%5;
document.write("17 % " + result2 +"(remainder)<br>");

let result3 = 20%4;
document.write("20 % 4 ="+ result3 + "(remainder)<br>");

let result4 = 9 % 2;
document.write("9 % 2 =" + result4 + "(remainder)<br>");


// Negation operator examples
let num1 = 10;
let negNum1 = -num1;
document.write("Original:" + num1 + " Negated:" + negNum1 + "<br>")

let num2 = -7;
let negNum2 = -num2;
document.write("Original:" + num2 + " Negated:" + negNum2 + "<br>");

let num3 = 0;
let negNum3 = -num3;
document.write("Original:" + num3 + " Negated:" + negNum3 + "<br>");

// Direction negation
document.write("-15 =" +(-15)+"<br>");
+ combo + "<br>");

//===== INCREMENT OPERATOR =====
let count1 = 5;
document.write("Starting value: " + count1 + "<br>");
// Post-increment: use value first, then add 1
document.write("count1 ++ value used: " + count1 ++ + " (then becomes 6)<br>");
document.write("Now count1 is: " + count1 + "<br><br>");
// Pre-increment: add 1 first, then use value
document.write("Starting value: " + count2 + " <br>");
document.write("++count2 becomes: " + ++count2 + "<br><br>");
// ===== DECREMENT OPERATOR =====
let count3 =10;
document.write("Starting value:" + count3 + "<br>");
// Post-decrement: use value first, then subtract 1
document.write("count3-- value used: " + count3-- + " (then becomes 9)<br>");
Document.write("Now count3 is: " + count3 + "<br><br>");
let count4 = 10;
// Addition
let add = 25 + 12;
document.write("25 + 12 = " + add + "<br>");

// Subtraction
let sub = 50 - 15;
document.write("50 - 15 = " + sub + "<br>");

// Multiplication
let mul = 8 * 6;
document.write("8 X 6 = " + mul + "<br>");

// Division
let div = 100 / 4;
document.write("100 / 4 = " + div + "<br>");

// Modulus
let mod = 23 % 5;
document.write("23 % 5 = " + mod + " (remainder)<br>");

// Negation
let num = 18;
document.write("-18 = " + (-num) + "<br>");

// Combiined operations
let combo = (5 + 3) * 2;
document.write("(5 + 3) x 2 = " 
// Pre-decrement: subtract 1 first, then use value
document.write("Starting value: " + count4 + "<br>");
document.write("--count4 becomes: " + --count4 + "<br>");

//Basic random number (0 to <1)
let randomDecimal=Math.random();
document.write("Random decimal(0-1):" + randomDecimal +"<br><br>");

//Random number between 0 and 9
let random0to9 =Math.floor(Math.random()*10);
document.write("Random number(0-9):" + random0to9 +"<br>");

//Random number between 1 and 10
let random1to10 =Math.floor(Math.random()*10)+1;
document.write("Random number(1-10):" + random1to10 +"<br>");

//Random number between 1 and 100
let random1to100 =Math.floor(Math.random()*100)+1;
document.write("Random number(1-100):" + random1to100 +"<br>");

//Math.round ()
let rounded=Math.round(4.65);
document.write("Math.round(4.65) = " + rounded +"<br>");

//Math.ceil()
let ceiled=Math.ceil(3.14);
document.write("Math.ceil(3.14) = " + ceiled +"<br>");

//Math.floor()
let floored=Math.floor(7.99);
document.write("Math.floor(7.99) = " + floored +"<br>");

// Math.max()
let largest= Math.max(12, 45, 28, 6);
document.write("Math.max(12, 45, 28, 6) = " + largest +"<br>");

// Math.min()
let smallest= Math.min(12, 45, 28, 6);
document.write("Math.min(12, 45, 28, 6) = " + smallest +"<br>");

// Math.pow()
let power= Math.pow(4, 3);
document.write("Math.pow(4, 3) = " + power +"<br>");

// Math.sqrt()
let root = Math.sqrt(64);
document.write("Math.sqrt(64) = " + root +"<br>");

// ===== HELPER FUNCTION: DISPLAY RESULTS =====
// This function updates area in the HTML
function displayResult(message) {
    const resultsDiv = document.getElementById("results");
    resultsDiv.innerHTML += message + "<br>";
}
// ===== 1. ADDITION =====
// Uses the + operator to add two numbers
function addNumbers() {
    let num1 = 25;
    let nun2 = 17;
    let result = num1 + num2;
    displayResult(`${num1} + ${num2} = ${result}`);
}
// ===== 2. SUBTRACTION =====
// Uses the - operator to subtract two numbers
function subtractNumbers() {
    let num1 = 50;
    let num2 = 14;
    let result = num1 - num2;
    displayResult(`${num1} - {num2} = ${result}`);
}
// ===== 3. MULTIPLICATION =====
//Uses the * operator to multiply two numbers
function multiplyNumbers() {
    let num1 = 8;
    let num2 =7;
    let result = num1 * num2;
    displayResult(`${num1} x ${num2} = ${result}`);
}
// ===== 4. DIVISION =====
// Uses the / operator to divide two numbers
function divideNumbers() {
    let num1 = 100;
    let num2 = 4;
    let result = num1 / num2;
    displayResult(`${num1} / ${num2} = ${result}`);
}
// ===== 5. MODULUS =====
// Uses the % operator - returns the remainder of a division
function modulusNumbers() {
    let num1 =23;
    let num2 = 5;
    let result = num1 % num2;
    displayResult(`${num1} % ${num2} = ${result} (remainder)`);
}
// ===== 6. INCREMENT =====
// Uses ++ operator - increases a number by 1
let incValue = 10;
function incrementNumber() {
    incValue ++;
    displayResult(`Increment: value became ${incValue}`);
}
// ===== 7. DECREMENT =====
// Uses -- operator - decreases a number by 1
let decValue =10;
function decrementNumber() {
    decValue --;
    displayResult(`Decrement: value became ${decValue}`);
}
// ===== 8.MATH.RANDOM() =====
//Math.random() returns a random number between 0 and 1
function getRandomNumber() {
    // Generate a random whole number 1 and 100
    let randomNum = Math.floor(Math.random() * 100) + 1;
    displayResult(`Random number (1-100): ${randomNum}`);
}