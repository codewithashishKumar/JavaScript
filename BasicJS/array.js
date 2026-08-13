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


// using a function inside array
const sample = [
    'ash',
    'king',
    [1, 2, 3, 4],
    function (name) {
        return 'Hello ' + name;
    }
]
console.log(sample[3](sample[0]));