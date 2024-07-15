let json;
const body=document.body

// Returns a random integer between min and max
//   [min, min+1, min+2, ... , max-1, max]
function randInt(min, max) {
    let rand = Math.random();
    rand = rand * (max - min + 1);
    rand = rand + min;
    rand = Math.floor(rand);
    return rand;
}
const guessField=document.getElementById("guess-field")
const feedbackText=document.getElementById("report-text")


function loadGame() {
    fetch('./words_dictionary.json')
        .then(response => response.text())
        .then(text => {
            // Split the text by lines to get individual words
            json = JSON.parse(text); 
            console.log('Words loaded!');
            wordsLoaded();
        })
        .catch(error => {
            console.error('Error fetching words: ', error);
        });
        ranmdomBackgroundColor();
}

function ranmdomBackgroundColor (){
     random=randInt(135,225);
    colorString=`hsl(${random},80%,90%)`;
    body.style.backgroundColor=colorString
}
let arr=[]
let fiveLetterWords=[]
let secret=`` ;
const randomWord=document.getElementById("random-Word");
function wordsLoaded(){
    let arr = Object.keys(json)
    let randomIndex = randInt(0, arr.length-1)
    randomWord.innerHTML= arr[randomIndex];

    for(let i=0; i<arr.length;i++) {
        let word=arr[i]
if (word.length !=5) continue;
        fiveLetterWords.push(word);

    }
   

    randomIndex=randInt(0,fiveLetterWords.length-1);
    secret=fiveLetterWords[randomIndex].toLowerCase();
}


function changeGuess (){
let guess=guessField.value.toLowerCase();
// SKIP if guess is less than 5 letters
if(guess.length<5) return;
// SKIP and empty if guess is more than 5 letters
if(guess.length>5){
    guessField.value="";
    return;
}

console.log(`Guess:"${guess}" and secret::"${secret}"`);
// Skip and empty if guess is Not a word
if( !json.hasOwnProperty(guess)){
    feedbackText.innerHTML +=`"${guess}" is not a word. Try again.`;
    guessField.value="";
return;
}
let correctPlacement=0;
for(let i=0; i<5; i++){
if(guess[i]==secret[i]){
    correctPlacement++;
}

    
}
feedbackText.innerHTML+=`"${guess}" has ${correctPlacement} letter(s)in the correct place.<br>`;
guessField.value="";
}


// TODO: write function isWord(word)

// For checking word:  json.hasOwnProperty("programming")
// For array of words: let arr = Object.keys(json)
// For a random word:  let word = arr[randInt(0, arr.length - 1)];
