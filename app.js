let boxes = document.querySelectorAll(".btn");//array of the 9 boxes
let msgContainer = document.querySelector(".msg-container");
let msg = document.getElementById("msg");//the winner msg
let reset = document.querySelectorAll(".reset");//reset button

const winPatterns = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 5, 8],
    [2, 4, 6],
    [3, 4, 5],
    [6, 7, 8],
];

let turnO = true; //playerX, playerO
let count = 0; //To Track Draw


const gameDraw = () => {
    msg.innerHTML = "Game has been drawn!";
    msgContainer.classList.remove("hide");
    disableBoxes();
}


const resetGame =() => {
    turnO = true;
    count = 0;
    enableBoxes();
    msgContainer.classList.add("hide");
}

boxes.forEach( (box) => {
    box.addEventListener('click', () =>{
        if(turnO){
            //player 0
            box.innerText = "X";
            box.style.color =  "#ff1b6b";
            turnO = false;
        }
        else{
            //player X
            box.innerText = "O";
            box.style.color = "black";
            turnO = true;
        }
        box.disabled = true;
        count++;

        let isWin = checkWinner();//stores the boolean value of the winner.

    if(count == 9 && !isWin){
            gameDraw();
        }
    });
});


const disableBoxes = () => {
    for (let box of boxes) {
    box.disabled = true;
    }
};

const enableBoxes =() =>{
    for(let box of boxes) {
    box.disabled = false;
    box.innerText ="";
}
}

const showWinner = (winner) => {
    msg.innerText =`Congratulations!,player ${winner} is the winner. `;
    msgContainer.classList.remove("hide");
    disableBoxes();
}

const checkWinner = () => {
    for (let pattern of winPatterns){
        //console.log(pattern[0] ,pattern[1] ,pattern[2] );
        let pos1val = boxes[pattern[0]].innerText;//string
        let pos2val = boxes[pattern[1]].innerText;
        let pos3val = boxes[pattern[2]].innerText;

        if(pos1val !== "" && pos2val !=="" && pos3val !==""){
            if(pos1val === pos2val && pos3val === pos2val){
                showWinner(pos1val);
                return true;
            }
        }
    }
}



for (let r of reset){
    r.addEventListener("click",resetGame);
}