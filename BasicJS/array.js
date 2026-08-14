const cars = [
    "Saab",
    "Volvo",
    "BMW"
];

console.log(cars);
console.log(cars[0]);
console.log(cars[1]);
console.log(cars[2]);

const data = cars.toString();
console.log(cars);

const arrayName = ['ash', 'king', [1, 2, 3, 4]]
console.log(arrayName);
console.log(arrayName.length);
console.log(arrayName[2][1]);
arrayName.map((arr) => {
    console.log(arr)
})

console.log('----slice method------');
const kl = arrayName.slice(0, 3); //.slice(start,end) - from 0 to 3 return;
console.log(kl)
console.log('----slice method------');

console.log('----splice method------');
let spliceArr = [1, 2, 3, 4, 5, 6];

spliceArr.splice(0, 1, 40); //.slice(start,deleteItem,attItem) - from 0 to 3 return;
console.log(spliceArr)
console.log('----splice method------');


console.log('----practice slice and splice------');
let companyNames = ['Bloomberg', 'Microsoft', 'Uber', 'Google', 'Netflix'];
// remove first name
console.log(companyNames)
companyNames.shift();
console.log(companyNames);
companyNames.splice(1, 1, 'Ola')
console.log(companyNames);
companyNames.push('Amazon');
console.log(companyNames);
console.log('----practice slice and splice------');

// using a function inside array
const sampleNew = [
    'ash',
    'king',
    [1, 2, 3, 4],
    function (name) {
        return 'Hello ' + name;
    }
]
console.log(sampleNew[3](sampleNew[0]));

// arrays length is items in array for below example it would be 5
const students = [97, 85, 67, 45, 78];
console.log('----for.....in loop------');
for (let i = 0; i < students.length; i++) {
    console.log(students[i]);
}
console.log('----for.....of loop------');
for (let el of students) {
    console.log(el);
}
console.log('----map()------');
students.map((item) => {
    console.log(`with map function - ${item}`)
});

console.log('----practice average------');
let sum = 0;
for (let marks of students) {
    sum += marks
}
console.log(sum);
const average = sum / students.length
console.log(average);

console.log('----practice highest------');
let highest = 0;
let lowest = Infinity;

for (let i = 0; i < students.length; i++) {
    if (students[i] > highest) {
        highest = students[i]
    }
}
console.log('highest', highest);

console.log('----practice lowest------');
for (let i = 0; i < students.length; i++) {
    if (students[i] < lowest) {
        lowest = students[i]
    }
}
console.log('lowest', lowest);

console.log('----practice all items have 10% off------');

let prices = [250, 645, 300, 900, 50];

let finalPrice = [];

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] - (prices[i] / 10);
    finalPrice.push(offer)
}
console.log('----created new array------');
console.log(finalPrice)

for (let i = 0; i < prices.length; i++) {
    let offer = prices[i] / 10;
    prices[i] = prices[i] - offer
}
console.log('----same array------');
console.log(prices);
prices.forEach((price) => {
    const offer = price / 10;
    price = price - offer;
})
console.log('----for each loop array------');
console.log(prices)