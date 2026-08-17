// class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    func() {
        console.log(`this is my name ${this.name} and my age ${this.age}`)
    }
}
// creating object
const a = new Person('Ashish', 30);
const b = new Person('Kumar', 20);
//calling method
a.func();
b.func();


// sample object
const obj = {
    name: 'Ashish',
    age: 30,
    marks: 95,
    printMarks: function () {
        console.log(`marks = ${this.marks}`); //this.marks means obj.marks
    }
}

//accessing and adding via __proto__;
const des = {
    salary: 50000,
}

des.__proto__ = obj;
console.log(des)
// console.log(des.printMarks());


class Greeting {
    welcome() {
        console.log('Weclome')
    }
    exit() {
        console.log('Exit')
    }
}

// inheritance methods uses extends
class NewGreeting extends Greeting {
    hello() {
        console.log('Hello')
    }
}

class sample {
    constructor(name, city, reading) {
        this.name = name;
        this.value = city;
        this.reading = {
            temp: 30,
            age: 45
        }
    }

    print() {
        console.log(`this is my name ${this.name} and my city ${this.value}`)
    }
    place(city) {
        console.log(`this is my city ${city}`)

    }

}
let ash = new sample('ashish', 30)
console.log(ash.print());
let read = ash.reading;
console.log(read)
console.log(ash.place('Meerut'));

// super method is used inside a child class to access the parent class.
class Animal {
    constructor(name) {
        this.name = name;
    }
    makeSound() {
        console.log(`${this.name} is a Animal making a sound`);
    }
}

class Dog extends Animal {
    constructor(name) {
        super(name);
    }
    makeSound() {
        console.log("Dog barks");
        super.makeSound();
        console.log(this.name);
    }
}

const myDog = new Dog("Tommy");

myDog.makeSound();

class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    viewData() {
        console.log(`${this.name} ${this.email}`);
    }
}

const user1 = new User('Ashish', 'sample@gmail.com');
const user2 = new User('himanshu', 'domain@gmail.com');
const user3 = new User('flash', 'https@gmail.com');
const allUsers = [user1, user2, user3]

console.table(allUsers);

class Admin extends User {
    constructor(name, email) {
        super(name, email);
    }
    editData() {
        console.log('edit data')
    }
}

let admin = new Admin('admin', 'asdas@gmail.com');
console.log(admin.editData());

