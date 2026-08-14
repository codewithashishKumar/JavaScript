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

function add(a, b) {
    return a + b;
}
let sum = add(10, 5);
// console.log(sum);

console.log('----find vowels in string using function------');
const string = 'aplhabetically';
const checkVowels = (data) => {
    let count = 0;
    for (let i = 0; i < data.length; i++) {
        if (data[i] === 'a' || data[i] === 'e' || data[i] === 'i' || data[i] === 'o' || data[i] === 'u') {
            count++
        }
    }
    console.log(count)
}
checkVowels(string);
checkVowels('param');
console.log('----find vowels in string using function------');

console.log('----squre root using function------');
let numbers = [2, 3, 4, 5, 6];
console.log(numbers);
let squareNumbers = [];
numbers.forEach((num) => {
    squareNumbers.push(num * num)
});
console.log(squareNumbers);

let calc = (num) => {
    console.log(num * num)
}
numbers.forEach(calc);

console.log('----squre root using function------');

numbers.map((num) => {
    if (num % 2 === 0) {
        console.log('even numer', num)
    }
    else {
        console.log('odd numer', num)
    }
});
console.log('----reduce function------');
// .reduce() function 
const values = [1, 2, 3, 40, 5];
let valueTotal = values.reduce((acc, current) => {
    return acc + current;
}, 0)
console.log(valueTotal);
console.log('----reduce function------');
console.log('----for.....in loop------');
let count = 0;
// .for....in loop 
for (let i = 0; i < values.length; i++) {
    count = count + values[i];
}
console.log(count);
console.log('----for.....in loop------');

const largestNum = values.reduce((acc, current) => {
    return acc > current ? acc : current;
});
console.log(largestNum);

let smallets = Infinity;
for (let i = 0; i < values.length; i++) {
    if (values[i] < smallets) {
        smallets = values[i]
    }
}
console.log(smallets);

const markedStudents = [90, 56, 37, 86, 42];
let newMakrs = [];
markedStudents.filter((makrs) => {
    if (makrs >= 80) {
        newMakrs.push(makrs)
    }
});
console.log(newMakrs);
const topppers = markedStudents.filter((makrs) => {
    return makrs > 80;
});
console.log(topppers);
const userInput = prompt('enter a number');
let arrs = [];
for (let i = 1; i <= userInput; i++) {
    arrs[i - 1] = i;
}
console.log(arrs);
let sumd = arrs.reduce((acc, current) => {
    return acc + current
}, 0)
console.log(sumd);