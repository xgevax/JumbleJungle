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
    alert(`Tijd is voorbij ${correctWord.toUpperCase()} was het juiste woord.`);
    initGame();
  }, 1000);
}

const initGame = () => {
  console.log('Initializing new game...');  // log
  initTimer(30);
  let randomObj = word[Math.floor(Math.random() * word.length)];
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
  console.log('New word:', correctWord);  // log
}

initGame();

const checkWord = () => {
  let userWord = inputField.value.toLowerCase();
  if(!userWord) return alert("Er is nog geen woord ingevult")
  if (userWord !== correctWord) return alert(`Jammer, ${userWord} is niet het correct woord.`)
  alert(`Goed gedaan! ${correctWord.toUpperCase()} is het correcte woord`)
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

initGame();

// document.addEventListener("DOMContentLoaded", () => {
//   const wordText = document.querySelector(".word"),
//       hintText = document.querySelector(".hint span"),
//       timeText = document.querySelector(".time b"),
//       inputField = document.querySelector("input"),
//       refreshBtn = document.querySelector(".refresh"),
//       checkBtn = document.querySelector(".check");

//   let correctWord, timer;

//   const initTimer = maxTime => {
//       clearInterval(timer);
//       timer = setInterval(() => {
//           if (maxTime > 0) {
//               maxTime--;
//               timeText.innerText = maxTime;
//           } else {
//               clearInterval(timer);
//               alert(`Time's up! ${correctWord.toUpperCase()} was the correct word.`);
//               initGame();
//           }
//       }, 1000);
//   };

//   const initGame = () => {
//       initTimer(30);
//       let randomObj = word[Math.floor(Math.random() * word.length)];
//       let wordArray = randomObj.word.split("");
//       for (let i = wordArray.length - 1; i > 0; i--) {
//           let j = Math.floor(Math.random() * (i + 1));
//           [wordArray[i], wordArray[j]] = [wordArray[j], wordArray[i]];
//       }
//       wordText.innerText = wordArray.join("");
//       hintText.innerText = randomObj.hint;
//       correctWord = randomObj.word.toLowerCase();
//       inputField.value = "";
//       inputField.setAttribute("maxlength", correctWord.length);
//   };

//   const checkWord = () => {
//       let userWord = inputField.value.toLowerCase();
//       if (!userWord) {
//           alert("Please enter a word to check!");
//           return;
//       }
//       if (userWord !== correctWord) {
//           alert(`Oops! ${userWord} is not the correct word.`);
//       } else {
//           alert(`Good job! ${correctWord.toUpperCase()} is the correct word.`);
//       }
//       initGame();
//   };

//   refreshBtn.addEventListener("click", () => {
//       initGame();
//   });

//   checkBtn.addEventListener("click", () => {
//       checkWord();
//   });

//   initGame(); // Initial game setup
// });
