const wordText = document.querySelector(".word"),
hintText = document.querySelector(".hint span"),
timeText = document.querySelector(".time b"),
inputField = document.querySelector("input"),
refreshBtn = document.querySelector(".refresh"),
checkBtn = document.querySelector(".check");

let correctWord, timer;

const initTimer = maxTime => {
    clearInterval(timer);
    timer = setInterval(() => {
        if(maxTime > 0) {
            maxTime--;
            return timeText.innerText = maxTime;
        }
        alert(`Tijd is voorbij, ${correctWord.toUpperCase()} was het correcte woord.`);
        initGame();
    }, 1000);
}

const initGame = () => {
    console.log('start new game...');  // log
    initTimer(30);
    let randomObj = words[Math.floor(Math.random() * words.length)];
    let wordArray = randomObj.word.split("");
    for (let i = wordArray.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
    }
    wordText.innerText = wordArray.join("");
    hintText.innerText = randomObj.hint;
    correctWord = randomObj.word.toLowerCase();;
    inputField.value = "";
    inputField.setAttribute("maxlength", correctWord.length);
    console.log('New word:', correctWord);  //log
}
initGame();

const checkWord = () => {
    let userWord = inputField.value.toLowerCase();
    if(!userWord) return alert("Er is geen woord ingevult");
    if(userWord !== correctWord) return alert(`Nope, ${userWord} is niet het correcte woord`);
    alert(`Yes! ${correctWord.toUpperCase()} is het correcte woord!`);
    initGame();
}

refreshBtn.addEventListener("click", () => {
    console.log('Refresh button clicked');  // log
    initGame();
  });
  
  checkBtn.addEventListener("click", () => {
    console.log('Check button clicked');  // log
    checkWord();
  });
