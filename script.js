let score = JSON.parse(localStorage.getItem('score'));

//let img1= document.createElement("img");
//img1.src="FD693547-FFE7-432A-AC3A-951700F8317E.PNG";

//let img2= document.createElement("img");
//img2.src="ChatGPT\ Image\ Aug\ 15\,\ 2025\,\ 01_24_18\ PM.png";

//let img3= document.createElement("img");
//img3.src="5112AC56-1C82-4E2B-A4A3-C27D37DADD8B.PNG";

//img1.classList.add('emoji-move');
//img2.classList.add('emoji-move');
//img3.classList.add('emoji-move');



if (!score) {
  score ={
    wins: 0,
    losses: 0,
    ties: 0,
  };
}

let computerMove = '';
let gameResult = '';


document.querySelector('.displayScore1').innerText = `Wins: ${score.wins}`; 
document.querySelector('.displayScore2').innerText =`Losses: ${score.losses}`;
document.querySelector('.displayScore3').innerText =`Ties: ${score.ties}`

 function playGame(){

let result = Math.random();

if(result>=0 && result<(1/3)){
    computerMove = 'rock';
}
else if(result>=(1/3) && result<(2/3) ){
    computerMove = 'paper';
}
else if(result>=(2/3) && result<1){
    computerMove = 'scissors'
}

}

function finalResult(playerMove){

    playGame();

if(playerMove==='rock'){

if(computerMove=== 'rock'){
    gameResult = 'Tie';
    
}
else if(computerMove=== 'paper'){
    gameResult = 'You lost';
    
}
else if(computerMove=== 'scissors'){
    gameResult = 'You won';
    
}
       
    }

else if(playerMove==='paper'){

if(computerMove=== 'rock'){
    gameResult = 'You won';
    
}
else if(computerMove=== 'paper'){
    gameResult = 'Tie';
    
}
else if(computerMove=== 'scissors'){
    gameResult = 'You lost';
    
}

}

else if(playerMove==='scissors'){

if(computerMove=== 'rock'){
    gameResult = 'You lost';
    
}
else if(computerMove=== 'paper'){
    gameResult = 'You won';
    
}
else if(computerMove=== 'scissors'){
    gameResult = 'Tie';

}

}
if(gameResult==='You won'){
score.wins +=1;
}

else if(gameResult==='You lost'){
score.losses +=1;
}

else if(gameResult==="Tie"){
score.ties +=1;
}

localStorage.setItem('score', JSON.stringify(score));

document.querySelector('.displayScore1').innerText = `Wins: ${score.wins}`; 
document.querySelector('.displayScore2').innerText =`Losses: ${score.losses}`;
document.querySelector('.displayScore3').innerText =`Ties: ${score.ties}`



displayF(playerMove);



   /* alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${gameResult}
    Wins: ${score.wins} Losses: ${score.losses} Ties: ${score.ties}`);*/
    

}/*finalResult function end braces*/


function resetScores(){
score.wins = 0;

score.losses = 0;

score.ties = 0;

localStorage.removeItem('score');

document.querySelector('.displayScore1').innerText = `Wins: ${score.wins}`; 
document.querySelector('.displayScore2').innerText =`Losses: ${score.losses}`;
document.querySelector('.displayScore3').innerText =`Ties: ${score.ties}`

}



/*function sub(){
let subElement = document.querySelector('.first-proj');

if(subElement.innerText === 'subscribe'){

subElement.innerText = 'subscribed';
subElement.classList.add('after-sub');
}
else{
subElement.innerText = 'subscribe';
subElement.classList.remove('after-sub')
}

}
*/
function displayF(playerMove) {
  
document.querySelector('.display1').innerText = gameResult;
document.querySelector('.display2').innerText = `You chose ${playerMove}`;
document.querySelector('.display3').innerText = `Computer chose ${computerMove}`;

//const emojiContainer = document.querySelector('.emoji');
    //emojiContainer.innerHTML = '';

//if(gameResult==='Tie'){
    //document.querySelector('.emoji').appendChild(img1);
//}else if(gameResult==='You lost'){
   // document.querySelector('.emoji').appendChild(img2);
//}else if(gameResult==='You won'){
   // document.querySelector('.emoji').appendChild(img3);
//}

}


/*function calc_func1(){

let price = document.querySelector('.calculateButton');
let finalCost = Number(price.value);

if(finalCost >= 0 && finalCost <40){

document.querySelector('.displayCost').innerText = finalCost +=10 ;
}
else if(finalCost >=40){

document.querySelector('.displayCost').innerText = finalCost += 0;
}

document.querySelector('.displayCost').innerText = `$${finalCost}`;

}

*/