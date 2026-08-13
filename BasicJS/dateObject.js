const date = new Date();
console.log(date);
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getFullYear());
console.log(date.getMonth());

const hours = date.getHours();
const hour12 = hours % 12 || 12;
const ampm = hours >= 12 ? "PM" : "AM";
console.log(`${hour12} : ${ampm}`);