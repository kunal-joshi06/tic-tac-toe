let turn = "X"
let gameOver = false;

//Function when turn changes
const changeTurn =()=>{
    return turn === "X"?"0":"X";
}

//Function to check winner
const checkWinner =()=>{
    let boxtext = document.getElementsByClassName('boxtext')
    let wins = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    wins.forEach(e =>{
        if((boxtext[e[0]].innerText === boxtext[e[1]].innerText) && (boxtext[e[2]].innerText === boxtext[e[1]].innerText) && (boxtext[e[0]].innerText !== "")){
           document.querySelector('.chance').innerText = boxtext[e[0]].innerText + " Won"; 
            gameOver = true;
            document.querySelector('.img-box').getElementsByTagName('iframe')[0].style.width = "300px"
        }

    })
}

//Game Logic
let boxes = document.getElementsByClassName("box");
Array.from(boxes).forEach(element =>{
    let boxtext = element.querySelector('.boxtext');
    element.addEventListener('click', (e)=>{
        if(boxtext.innerText === ''){
            boxtext.innerText = turn;
            turn = changeTurn();
            checkWinner();
            if(!gameOver){
                document.getElementsByClassName("chance")[0].innerText = "Turn for " + turn;
            }
            
        }
    })
})


//Reset Logic
reset.addEventListener('click', ()=>{
    let boxtexts = document.querySelectorAll('.boxtext');
    Array.from(boxtexts).forEach(element =>{
        element.innerText= ""
    })

    turn = "X"
    gameOver=false;
        document.getElementsByClassName("chance")[0].innerText = "Turn for " + turn;
        document.querySelector('.img-box').getElementsByTagName('iframe')[0].style.width = "0px"
    
})