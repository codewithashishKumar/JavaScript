const btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     alert('hello click');
//     btn.style.backgroundColor = '#000';
// });
// btn.addEventListener('dblclick', () => {
//     alert('hello click');
//     btn.style.backgroundColor = 'green';
// });

btn.addEventListener('mouseover', () => {
    console.log('hello mouse in');
    btn.style.backgroundColor = 'green';
});

btn.addEventListener('mouseout', () => {
    console.log('hello mouse out');
    btn.style.backgroundColor = 'transparent';
});

btn.onclick = (e) => {
    console.log(e.target);
    alert('js changes')
}


let mode = 'light';
const toggleBtn = document.getElementById('toggle');

toggleBtn.addEventListener('mouseover', () => {
    toggleBtn.style.cursor = 'pointer';
});
toggleBtn.addEventListener('click', () => {
    if (mode === 'light') {
        mode = 'dark';
        document.querySelector('body').classList.add('dark');
    } else {
        mode = 'light';
        document.querySelector('body').classList.remove('dark');
    }
    console.log(mode);
});