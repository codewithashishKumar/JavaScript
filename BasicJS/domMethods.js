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

// button = document.getElementById('btn');
// console.log(button);

// let content = document.getElementsByClassName('same');
// console.log(content);
// const ptags = document.getElementsByTagName('p');
// console.log(ptags);

// const firstElement = document.querySelector('.same');
// console.log(firstElement);
// // const allElements = document.querySelectorAll('.same');
// // console.log(allElements);

// const fNode = document.body.firstElementChild;
// console.log(fNode)
// const lNode = document.body.lastElementChild;
// console.log(lNode);
const title = document.getElementById('heading');
title.innerText = title.innerText + ' Javascript';

let divs = document.querySelectorAll('.box');
for (let i = 0; i < divs.length; i++) {
    divs[i].innerText = ` Hello div ${i}`;
}
let firstDiv = document.querySelector('.box').getAttribute('class');
console.log(firstDiv);
let para = document.querySelector('p');
para.setAttribute('class', 'newBOx');
para.setAttribute('id', 'newBOx');
para.setAttribute('data-key', '12');
para.style.backgroundColor = '#000';
para.style.color = '#fff';
para.style.textAlign = 'center'

let button = document.createElement('button');
button.innerText = 'Click'
document.body.append(button); //adds at end
// document.body.prepend(button); // adds before
// document.body.after(button); // adds after body outside
// document.body.before(button); // adds before body outside
// document.body.removeChild(button); // deletes this button