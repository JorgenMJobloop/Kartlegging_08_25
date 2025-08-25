// console.log is used to print statements to our browsers built-in console
// console.log();

// When we access DOM elements in our HTML document, we can use for instance, the ID of the element
const myButton = document.getElementById("my-btn");
const inputText = document.getElementById("input-text");
const textContentInDocument = document.getElementById("text-content");


// JavaScript data types & variables
const str = "Hello";
let str1 = "World";
const age = 19;
let isOldEnough = false;

let score = 0;


// An array
const handleListe = ["Brus", "Melk", "Smør", "Snop"];

// A JavaScript object
const bedreHandleListe = {
    "pris": [30, 25, 25, 80],
    "handleliste": handleListe,
}

console.log(bedreHandleListe);

const jsObject = {
    "nøkell": "verdi",
    "nøkell2": "verdi2",
    "nøkkel3": "verdi3",
    "nøkkel4": ["Verdi 4", "Verdi 4 - 1", "Verdi 4 - 2", "Verdi 4 - 3"]
}


/**
 * A for-loop is used to "iterate"/ loop through all the values inside of an object
 * syntax: for(let i = 0; i < 10; i++) {
 *      // Expression: Example: 
 *      console.log("i = " + i);
 * }
 */

for (let i = 0; i < 15; i = i + 1) {
    console.log("i = " + i);
}

// Control flow

if (age >= 18) {
    isOldEnough = true;
    console.log(isOldEnough);
    console.log("You are old enough to enter this bar!");
}
else {
    console.log(isOldEnough);
    console.log("You are not old enough to enter this bar!");
}

console.clear()
// Functions

/**
 * Prints out a greeting to a user on the website
 * @param {*} name name of the person recieving the greeting 
 */
function greetingFunction() {
    textContentInDocument.textContent = "Hello " + inputText.value;
}

function sayMeow() {
    textContentInDocument.textContent = "Meow";
}

function cookieClicker() {
    score += 1;
    textContentInDocument.textContent = "You have clicked the cookie: " + score + " times";
}