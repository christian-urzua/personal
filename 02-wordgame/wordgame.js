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
    randomWord.innerHTML= arr[randomIndex]

    for(let i=0; i<arr.length;i++) {
        let word=arr[i]
if (word.length !=5) continue;
        fiveLetterWords.push(word);

    }
    console.log("all done")

    randomIndex=randInt(0,fiveLetterWords.length-1);
    secret=fiveLetterWords[randomIndex]
}






// TODO: write function isWord(word)

// For checking word:  json.hasOwnProperty("programming")
// For array of words: let arr = Object.keys(json)
// For a random word:  let word = arr[randInt(0, arr.length - 1)];
