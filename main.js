let negativeResult = -1 / 0;
let score1 = 18;
let score2 = 7;
let isHigher = score1 > score2;
let isLower = score1 < score2;
// Show comparison results in the page
document.getElementById("display").innerHTML =
    "Is 18 greater than 7? " + isHigher + "<br>" +
    "Is 18 less than 7? " + isLower;
// Click-to-show data type
let typePara = document.getElementById("typeDisplay");
typePara.onclick = function() {
    typePara.textContent = "Data type of isHigher: " + typeof isHigher;
};
// Console outputs (view with F12 - Console)
let sum = 15 + 7;
console.log("The result is:", sum);
let isGreater = 10 > 20;
console.log(isGreater);
// Create sample variable
let favouriteNumber = 7;
// Function to show data type using typeof operator
function showDataType() {
    document.getElementById("typeDisplay").innerHTML =
        "Data type: " + typeof favouriteNumber;
}

// Run when text is clicked
document.getElementById("typeofDisplay").onclick = showDataType;
// Logical AND (&&) and OR (||) examples
let numA =12;
let numB = 4;
// AND: true only when both conditions are true
let andTrue = (numA > numB && numA < 20);
let andFalse =(numA > numB && numA <5);
// OR: true when at least one condition is true

//==============================================================
// AND Operator (&&) - returns true ONLYwhen BOTH sides are true
//==============================================================
console.log("=== AND Operator Results ===");
console.log(true && true); // true - both are true
console.log(true && false); // false - one is false
console.log(false && true); // false - one is false
console.log(false && false); // false - both are false
//==============================================================
// OR Operator (||) - returns true when AT LEAST one side is true
//==============================================================
console.log("\n=== OR Operator Results ===");
console.log(true || true); // true - at least one is true
console.log(true || false); // true - at least one is true
console.log(false || true); // true - at least one is true
console.log(false || false); // false - both are false

function not_Function() {
    document.getElementById("Not").innHTML = ! (20 > 10);
}
function not_Function() {
    document.getElementById("Not").innerHTML = ! (5 > 10);
}