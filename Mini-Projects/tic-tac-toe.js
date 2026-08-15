let buttons = document.querySelectorAll(".box");
console.log(buttons);
//playerX,playerO
let turnO = false;

let winningData = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];


buttons.forEach((box) => {
    box.addEventListener('click', () => {
        if (turnO) {
            box.innerHTML = 'O';
            box.classList.remove('box-X');
            box.classList.add('box-O');
            turnO = false;
        } else {
            box.innerHTML = 'X';
            box.classList.remove('box-O');
            box.classList.add('box-X');
            turnO = true;
        }
        box.disabled = true;
        checkWinner();
    })
})

const checkWinner = () => {
    for (let winner of winningData) {
        // console.log(winner[0], winner[1], winner[2]);
        // console.log(buttons[winner[0]], buttons[winner[1]], buttons[winner[2]]);
        // console.log(buttons[winner[0]].innerHTML, buttons[winner[1]].innerHTML, buttons[winner[2]].innerHTML);
        let pos1 = buttons[winner[0]].innerHTML;
        let pos2 = buttons[winner[1]].innerHTML;
        let pos3 = buttons[winner[2]].innerHTML;

        if (pos1 === pos2 && pos2 === pos3 && pos1 !== '') {
            if (pos1 === pos2 && pos2 === pos3) {
                console.log("winner");
                buttons.forEach((button) => {
                    button.disabled = true;
                });
                document.querySelector('.msg-container').style.display = 'flex';
                document.getElementById('msg').innerHTML = `Winner is ${pos1}`;
            }
        }
    }
}

let reset = document.querySelector(".reset");
const resetGame = () => {
    turnO = false;
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '';
        buttons[i].disabled = false;
        buttons[i].classList.remove('box-X', 'box-O');
    }
};
reset.addEventListener('click', resetGame);


let reStart = document.querySelector(".re-start");
const reStartGame = () => {
    turnO = false;
    document.querySelector('.msg-container').style.display = 'none';
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerHTML = '';
        buttons[i].disabled = false;
        buttons[i].classList.remove('box-X', 'box-O');
    }
};

reStart.addEventListener('click', reStartGame);