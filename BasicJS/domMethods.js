// let bs = 'Ashish';
// let rev = '';
// for (let i = bs.length - 1; i >= 0; i--) {
//     rev = rev + bs[i]
// }
// console.log(rev.toLowerCase());

// let num = 5;
// for (let i = 0; i < num; i++) {
//     let stars = '*';
//     for (let k = 0; k < i; k++) {
//         stars = stars + '*';
//     }
//     console.log(stars);
// }

button = document.getElementById('btn');
console.log(button);

let content = document.getElementsByClassName('same');
console.log(content);
const ptags = document.getElementsByTagName('p');
console.log(ptags);

const firstElement = document.querySelector('.same');
console.log(firstElement);
// const allElements = document.querySelectorAll('.same');
// console.log(allElements);

const fNode = document.body.firstElementChild;
console.log(fNode)
const lNode = document.body.lastElementChild;
console.log(lNode)