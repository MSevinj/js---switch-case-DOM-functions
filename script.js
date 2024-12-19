// ## Switch&Case
// ### Question 1: **Traffic Light Action**
// Write a switch-case that takes a traffic light color and tells the user what action to take.

const trafficLight = "yellow";
switch (trafficLight){
  case "red":
    console.log("Stop now");
    break;
  case "yellow":
    console.log("Proceed with Caution");
    break;
  case "green":
    console.log("Go ahead");
    break;
  default:
    console.log("Invalid data");
}

// ### Question 2: **Grade Classification**
// Write a program that takes a letter grade (`A`, `B`, `C`, `D`, `F`) and outputs the corresponding classification.
const letterGrade = "F";
switch(letterGrade){
    case "A":
        console.log("Excellent");
        break;
    case "B":
        console.log("Good");
        break;
    case "C":
        console.log("Average");
        break;
    case "D":
        console.log("Passing");
        break;
    case "F":
        console.log("Fail");
        break;
    default:
        console.log("Invalid data");
}


// ## DOM
// 1. create 2 `querySelector` Example
console.log(document.querySelector("div"));
console.log(document.querySelector("p"));

// 2. create 2 `getElementById` Example
console.log(document.getElementById("test3"));
console.log(document.getElementById("test4"));

// 3. `getElementsByClassName` Example
console.log(document.getElementsByClassName("test1"));
console.log(document.getElementsByClassName("test2"));


// ### **Question 4**
// Create a button that, when clicked, shows an alert box with the message:
// `"Hello! You clicked the button."`
// ### **Requirements:**
// - Use `getElementById` or `querySelector` to select the button.
// - Add a `click` event listener to trigger the alert.

document.querySelector('button').addEventListener('click', function () {
console.log("Hello! You clicked the button.");})

// ### **Question 5**
// Create a button that, when clicked, changes the text of a paragraph.
// ---
// ### **Requirements:**
// 1. Add a paragraph with some initial text.
// 2. Add a button that, when clicked, changes the paragraph's text to `"Text has been changed!"`.
// 3. Use `getElementById` or `querySelector` to select both the paragraph and the button.

document.querySelector('.button2').addEventListener('click', function (){
    document.querySelector('.prgh').innerText = "Text has been changed!"
})


// ### **Question 6**
// Create a button that, when clicked, executes a function which logs the message `"Button clicked!"` to the console.
// ---
// ### **Requirements:**
// 1. Create a button in HTML.
// 2. Write a function that logs `"Button clicked!"` to the console.
// 3. Add an event listener to the button to execute the function when it is clicked.

document.querySelector('.button3').addEventListener('click', function () {
    console.log("Button clicked.")
});



//     ## Function
// 1. Create simple function and this function must return console.log(”HELLO”)

function logger (){
    console.log("HELLO");
}
logger();


// 2. Create simple function and this function must return user prompt
// const name = prompt ("Enter your name")

// function test () {
//     console.log (name)
// }
// test()

// 3. Create function and send 1 parametr and show this parametr in console.log()

const name = prompt ("Enter your name")
function test (test5) {
    console.log (test5)
}
test(name)