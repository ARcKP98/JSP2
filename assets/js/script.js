//select all the relevant variables 
const welcomeBox = document.getElementById("game-box-welcome");
const levelButton1 = document.getElementById("level-easy-btn");
const levelButton2 = document.getElementById("level-medium-btn");
const levelButton3 = document.getElementById("level-hard-btn");
const rulesBox = document.getElementById("rules-modal");
const rulesButton = document.getElementById("rules-btn");
const rulesBoxClose = document.getElementById("close-rules-btn")
const mainGame = document.getElementById("question-box");
const questionSpace = document.getElementById("question");
const answerSpace = document.getElementById("answer-options");
const answerOption1 = document.getElementById("answer-btn1");
const answerOption2 = document.getElementById("answer-btn2");
const answerOption3 = document.getElementById("answer-btn3");
const answerOption4 = document.getElementById("answer-btn4");
const nextButton = document.getElementById("next-btn");
const pointsTracker = document.getElementById("points");
const correctAnswer = document.getElementById("correct");
const incorrectAnswer = document.getElementById("incorrect");
const progressBar = document.getElementById("progress-bar-full");
const resultBox = document.getElementById("result-section");
const finalScore = document.getElementById("score");
const retryButton = document.getElementById("retry-btn");
const homeButton = document.getElementById("home-btn");

//Toggling betwen the rules section and the home screen. 
rulesButton.addEventListener('click', () => {
    welcomeBox.classList.add("hide");
    rulesBox.classList.remove("hide");
    rulesButton.classList.add("hide");
});
rulesBoxClose.addEventListener('click', () => {
    welcomeBox.classList.remove("hide"); 
    rulesBox.classList.add("hide");
    rulesButton.classList.remove("hide");
})





