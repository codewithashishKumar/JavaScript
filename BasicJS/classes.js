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
console.log(des.printMarks())