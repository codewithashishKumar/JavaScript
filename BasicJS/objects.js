const person = {
    name: 'A',
    job: 'C',
    age: 10,
}
person['lastname'] = 'b';
console.log(person.name)
console.log(person.lastname)
console.log(person);

const sample = new Object();
sample.name = 'Ash';
sample.city = 'Delhi';
sample.details = new Object();
sample.details['age'] = 20;
sample.details['role'] = 'searching';

console.log(sample);
console.log(Object.isSealed(sample))
console.log(Object.freeze(sample))
console.log(Object.isFrozen(sample))
delete sample.city;
console.log(sample);
sample['myfunc'] = function () {
    return alert(this.name);
};
console.log(sample.myfunc);


const inforCard = {
    name: 'Pen',
    color: 'Black',
    rating: 4,
    price: 20,
    discount: 5,
    totalCusRate: 7002,
    dealType: 'Deal Of the Day'
}