let score = 0;
let doraScore = 0;
let soundEnabled = true; 

function play(userChoice) {
  const choices = ['rock', 'paper', 'scissors'];
  const computerChoice = choices[Math.floor(Math.random() * 3)];

  document.getElementById("playerImg").src = `${userChoice}.png`;
  document.getElementById("doraImg").src = `${computerChoice}.png`;

  const playerImg = document.getElementById("playerImg");
const doraImg = document.getElementById("doraImg");

playerImg.classList.remove("animate-pop");
doraImg.classList.remove("animate-pop");

void playerImg.offsetWidth;
void doraImg.offsetWidth;

playerImg.classList.add("animate-pop");
doraImg.classList.add("animate-pop");

  let result = '';

  document.getElementById("bgm").volume = 0.1;

  if (userChoice === computerChoice) {
    result = "IT'S A DRAW!";
      leftDora.classList.remove("show");
      rightDora.classList.remove("show");
  } else if (
    (userChoice === 'rock' && computerChoice === 'scissors') ||
    (userChoice === 'paper' && computerChoice === 'rock') ||
    (userChoice === 'scissors' && computerChoice === 'paper')
  ) {
    result = "YOU WIN!";
    score++;
    if (soundEnabled) document.getElementById("winSound").play();
    setDoraReactions("images/dora-sad-1.png", "images/dora-sad-2.png");
  } else {
    result = "YOU LOSE!";
    doraScore++;
    if (soundEnabled) document.getElementById("loseSound").play();
    setDoraReactions("images/dora-laugh-1.png", "images/dora-laugh-2.png");
  }

  document.getElementById("outcome").textContent = result;
  document.getElementById("score").textContent = score;
  document.getElementById("doraScore").textContent = doraScore;

  document.querySelector(".buttons").classList.add("hidden");
  document.querySelector(".result-panel").classList.remove("hidden");
}

function playAgain() {
  if (soundEnabled) {
    bgm.volume = 1.0;
  }
  document.querySelector(".buttons").classList.remove("hidden");
  document.querySelector(".result-panel").classList.add("hidden");
  
  leftDora.classList.remove("show");
  rightDora.classList.remove("show");
}

playBtn.addEventListener("click", () => {
  soundEnabled = true;
  bgm.volume = 1.0;
  bgm.play();
});

stopBtn.addEventListener("click", () => {
  soundEnabled = false;
  bgm.pause();
  bgm.currentTime = 0;

  [winSound, loseSound].forEach(sound => {
    sound.pause();
    sound.currentTime = 0;
  });
});

const leftDora = document.getElementById("leftDora");
const rightDora = document.getElementById("rightDora");

function setDoraReactions(leftSrc, rightSrc) {
  leftDora.src = leftSrc;
  rightDora.src = rightSrc;
  leftDora.classList.add("show");
  rightDora.classList.add("show");
}
