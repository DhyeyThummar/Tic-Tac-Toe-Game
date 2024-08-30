let boxes = document.querySelectorAll(".box");
let newgame = document.querySelector(".new");
let winmsg = document.querySelector(".winnermsg");
let message = document.querySelector(".msg");


const winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

newgame.addEventListener("click", () => {
    boxes.forEach((box) => {
        box.disabled = false;
        box.innerText = "";
    });
    winmsg.classList.add("hide");
    
});

let turnO = true;

const checkWin = () => {
    for (let patterns of winPatterns) {
        let val1 = boxes[patterns[0]].innerText;
        let val2 = boxes[patterns[1]].innerText;
        let val3 = boxes[patterns[2]].innerText;

        if (val1 == val2 && val2 == val3 && val1 != "") {
            printWinner(val1);
        }
    }
};

const game = () => {
    boxes.forEach((box) => {
        box.addEventListener("click", () => {
            if (box.innerText == "" && turnO) {
                box.innerText = "O";
                turnO = false;
            } else if (box.innerText == "" && !turnO) {
                box.innerText = "X";
                turnO = true;
            }
            checkWin();
        });
    });
};

const printWinner = (winner) => {
    message.innerText = `Congratulations! Winner is ${winner}`;
    winmsg.classList.remove("hide");
    boxes.forEach((box) => {
        box.disabled = true;
});

};

game();