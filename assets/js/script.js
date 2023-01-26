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
const score_score_keep = document.getElementById("points")
const correct_score_keep = document.getElementById("correct");
const incorrect_score_keep = document.getElementById("incorrect");
const progressBarFull = document.getElementById("progress-bar-full")
const resultBox = document.getElementById("result-section");
const finalScore = document.getElementById("score");
const retryButton = document.getElementById("retry-btn");
const homeButton = document.getElementById("home-btn");
const image = document.getElementById("img-result");

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
    showNextQuestion()
})

function showNextQuestion() {
    if(availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        mainGame.classList.add("hide");
        resultBox.classList.remove("hide")
        finalScore.innerText = score;
        if(score <= 30 ){
            image.src = "/assets/images/hulk.webp"
            image.alt = "Picture of Hulk"
           } else if(score <= 60){
            image.src = "/assets/images/cap.webp";
            image.alt = "Picture of Captain America"
           }
    
        }
    
    questionCounter++; 
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length)
    currentQuestion = availableQuestions[questionIndex];
    if(currentQuestion === undefined){
        return
    }
    questionSpace.innerText = currentQuestion.question;
    answerBtns.forEach(answer => {
        const number = answer.dataset["number"]
        answer.innerText = currentQuestion[number]
    })
    availableQuestions.splice(questionIndex, 1)
    acceptingAnswers = true;
    checkAnswer();
    
}

function checkAnswer() {
answerBtns.forEach(answer => {
    answer.addEventListener('click', e => {
        if(!acceptingAnswers) return; 
        acceptingAnswers = false;
        const selectedOption = e.target
        const selectedAnswer = selectedOption.innerText;
     
    
        const classToApply = selectedAnswer == currentQuestion.correct ? "correct-ans" : "incorrect-ans";
        answerOption1.classList.remove("answer-button-hover")
        answerOption2.classList.remove("answer-button-hover")
        answerOption3.classList.remove("answer-button-hover")
        answerOption4.classList.remove("answer-button-hover")
        if (answerOption1.innerText == currentQuestion.correct) {
            answerOption1.classList.add('correct-ans');
        } else if (answerOption2.innerText == currentQuestion.correct) {
            answerOption2.classList.add('correct-ans');
        } else if (answerOption3.innerText == currentQuestion.correct) {
            answerOption3.classList.add('correct-ans');
        } else if (answerOption4.innerText == currentQuestion.correct) {
            answerOption4.classList.add('correct-ans');
        }

        if(classToApply == 'correct-ans') {
            incrementScore(correctBonus);
            incrementQuestionCorrect(correctQ)
        } else {
            incrementQuestionWrong(correctQ)
        }
     
        selectedOption.classList.add(classToApply)
        setTimeout(() => {
            selectedOption.classList.remove(classToApply);
            
            showNextQuestion();
            resetQstate();
        }, 1000) 
    
    })
})

incrementScore = num => {
    score += num;
    score_score_keep.innerText = score;
    }
incrementQuestionCorrect = num => {
        correctAns += num;
        correct_score_keep.innerText = correctAns;
        }
incrementQuestionWrong = num => {
            incorrectAns += num;
            incorrect_score_keep.innerText = incorrectAns;
            }
}

function resetQstate() {
    answerOption1.classList.remove('correct-ans');
    answerOption2.classList.remove('correct-ans');
    answerOption3.classList.remove('correct-ans');
    answerOption4.classList.remove('correct-ans');
    answerOption1.classList.add("answer-button-hover")
    answerOption2.classList.add("answer-button-hover")
    answerOption3.classList.add("answer-button-hover")
    answerOption4.classList.add("answer-button-hover")
}
