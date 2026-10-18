//Define the function that changes paragraph content
function changeText() {
    //Assign two variables
    let greeting="Hello";
    let message="you successfully called a JavaScript function!";

    //Combine variables
    let fullMessage=greeting+" "+message;

    //Select element by ID and update its content
    document.getElementById("displayText").innerHTML=fullMessage;
}
//Track how many times the main button is clicked
let clickCount = 0;

//Array of fun messages to cycle through
const messages = [
    "Hello!",
    "You called a JavaScript function!",
    "Amazing! Functions make web pages interactive!",
    "Keep learning - you are doing great!",
    "Code is your superpower!",
    "Awesome work! Keep practicing!"
];
let currentMessageIndex = 0;
// Function 1: Change text and update counter
function changeText() {
    // Update the click count
    clickCount++;
    document.getElementById("countValue").innerHTML = clickCount;
    // Get next message
    let greeting= "Message:";
    let newText = messages[currentMessageIndex];
    currentMessageIndex = (currentMessageIndex + 1) % messages.length;
    // Update the paragraph
    document.getElementById("displayText").innerHTML ='<strong>${greeting}</strong><br>${newText}';
    document.getElementById("displayText").style.color ="#2c3e50";
}
// Function 2: Change background color
function changeBackgroundColor() {
    const colors =["#ffeaa7","#d1f2eb","#fde2e2","#e8f4f8","#f4f0f8"]
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = randomColor;

    document.getElementById("displayText").innerHTML =
    "Color changed! Click again for a new message!";
}
// Function 3: Reset everthing
function resetAll() {
    clickCount = 0;
    currentMessageIndex = 0;
    document.getElementById("displayText").innerHTML = "Click the button to change me!";
    document.getElementById("displayText").style.color ="";
    document.getElementById("countValue").innerHTML = "0";
    document.body.style.backgroundColor = "#f0f8ff";
}