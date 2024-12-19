let randomNumber=Math.floor(Math.random()*100)+1;

const guesses=document.querySelector(".guesses");
const lastResult=document.querySelector(".lastResult");
const lowOrHi=document.querySelector(".lowOrHi");

const guessSubmit=document.querySelector(".guessSubmit");
const guessField=document.querySelector(".guessField");

let guessCount=1;
let resetButton

function checkGuess(){
    let userGuess=Number(guessField.value);
    if(userGuess===randomNumber){
        lastResult.textContent="Nice job! You guess it!";
        lastResult.style.backgroundColor="purple";
        lowOrHi.textContent=" ";
        setGameOver();
    } else if(guessCount==10){
        lastResult.textContent="Game over!";
        setGameOver();
    } else{
        lastResult.textContent="Incorrect!";
        lastResult.style.backgroundColor="red";
        if(userGuess<randomNumber){
            lowOrHi.textContent="My number is bigger";
        } else if(userGuess>randomNumber){
            lowOrHi.textContent="My number is smaller";
        }
    }
    guessCount++;
    guessField.value="";
    guessField.focus();
}
guessSubmit.addEventListener("click", checkGuess);

function setGameOver(){
    guessField.disabled=true;
    guessSubmit.disabled=true;
    resetButton=document.createElement("button");
    resetButton.textContent="Start new game";
    resetButton.style.backgroundColor="black";
    resetButton.style.color="plum";
    resetButton.style.padding="10px";
    resetButton.style.border="1px solid plum";
    resetButton.style.borderRadius="5px";
    document.body.append(resetButton);
    resetButton.addEventListener("click",resetGame);
}
function resetGame(){
    guessCount=1;
    const resetParas=document.querySelectorAll(".resultParas p");
    for(let i=0;i<resetParas.length;i++){
        resetParas[i].textContent=" ";
    }
    resetButton.parentNode.removeChild(resetButton);
    guessField.disabled=false;
    guessSubmit.disabled=false;
    guessField.value="";
    guessField.focus();
    lastResult.style.backgroundColor="black";
    randomNumber=Math.floor(Math.random()*100)+1;
}