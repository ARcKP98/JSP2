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
let answerBtns = Array.from(document.getElementsByClassName('answer-button'))
const nextButton = document.getElementById("next-btn");
const resultBox = document.getElementById("result-section");
const finalScore = document.getElementById("score");
const retryButton = document.getElementById("retry-btn");
const homeButton = document.getElementById("home-btn");

let currentQuestion = {}
let acceptingAnswers = false; 
let score = 0 
let questionCounter = 0 
let availableQuestions = []
let correctAns = 0
let incorrectAns = 0 
correctQ = 1
correctBonus = 10; 
maxQuestions = 10; 


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

//Easy level game
levelButton1.addEventListener('click', startGameEasy = () => {
    questionCounter = 0; 
    score = 0; 
    welcomeBox.classList.add("hide")
    mainGame.classList.remove("hide");
    rulesButton.classList.add("hide");
    availableQuestions = [...easyQuestions]
    console.log(availableQuestions)
    showNextQuestion()
})

function showNextQuestion () {
    questionCounter++; 
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    questionSpace.innerText = currentQuestion.question;
    answerBtns.forEach(answer => {
        const number = answer.dataset["number"]
        answer.innerText = currentQuestion[number]
    })
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true;
    
}






