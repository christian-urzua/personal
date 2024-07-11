// GUIDELINES:
//  1. Give every variable/const smallest scope
//  2. Grab HTML elements by tag and store in const
//  3. Put all other code inside functions

var myConfetti = confetti.create(null, {
    resize: true,
    useWorker: true
    
});
const numfield=document.getElementById("num-field")
const messageText=document.getElementById("message-text")
let secret;
let min=1;
let max=100;


function loadGame(){
    numfield.min=min;
    numfield.max=max;
    numfield.value=max;
    secret=Math.random();
    secret=secret*(max-min+1);
    secret=secret+min;
    secret=Math.floor(secret)
}
function makeGuess() {
    let guess=parseInt(numfield.value);
    
    console.log(`Guess: ${guess}`);

    if(guess < secret) {
        messageText.innerHTML= `${guess} is too low`;
    } else if (guess > secret){
    messageText.innerHTML=`${guess} is too high`;
    } else if (guess==secret) {
        messageText.innerHTML=`${guess} is correct`;
        myConfetti({
            partcleCount: 100,
            spread: 100
        });
    } else {
        messageText.innerHTML=`invalid guess`;
    }
    
}