// we will start this js file with JS If Conditions
// if - Runs code only when the condition is true.
let age = 18;
let text = "You can Not drive";
if (age >= 18) {
    text = "You can drive";
}
console.log(text);

// else - else runs when the if condition is false.
let accountActive = false;
if (accountActive) {
    console.log("Account is active");
} else {
    console.log("Account is inactive");
}
//if...else - if...else gives you two possible paths.
let examScore = 75;
if (examScore >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// The else if Statement
let studentMarks = 78;
if (studentMarks >= 90) {
    console.log("Grade A");
} else if (studentMarks >= 75) {
    console.log("Grade B");
} else if (studentMarks >= 50) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Ternary ? :A shorter way to write a simple if...else.
let examScoreNew = 75;
if (examScoreNew >= 40) {
    console.log("Pass");
} else {
    console.log("Fail");
}