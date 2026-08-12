// for loop
let i = 5;
for (i = 0; i < 10; i++) {
    console.log('this is the value' + i + '<br>')
}

let text;
for (let i = 0; i <= 10; i++) {
    text = 'each time value of i is ' + i;
    console.log(text);
}

// while loop 
let a = 1;
while (a <= 5) {
    console.log(a);
    a++;
}

// do while loop

let b = 1;
do {
    console.log(b);
    b++;
} while (b <= 5);


// for....of loop
const fruits = ["Apple", "Mango", "Banana"];
for (const fruit of fruits) {
    console.log(fruit);
}


// for....in loop  - gives you the KEYS / property names.
const person = {
    name: 'Ash',
    age: 30,
    city: 'Delhi'
}

for (const key in person) {
    console.log(key);
}
for (const key in person) {
    console.log(key, person[key]);
}