// normal function 
function greet() {
    console.log("Hello");
}
greet();

// Function Expression
const sayHello = function () {
    console.log("Say Hello!");
};
sayHello();

// Arrow Function
const bye = () => {
    console.log('Say Bye');
};
bye();

//example of function with parameters
function passExam(name, score) {
    var passUnivesity = 72;
    var passCollege = 51;
    if (score >= passUnivesity) {
        console.log(name + ' enrolled in university with ' + score)
    } else if (score >= passCollege) {
        console.log(name + ' enrolled in college with ' + score)
    } else {
        console.log(name + ' failed in both')
    }
}
passExam('Ashish', 80);
passExam('John', 49);