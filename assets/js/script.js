//select all the relevant variables to be used. 
const welcomeBox = document.getElementById("game-box-welcome");
const levelButton1 = document.getElementById("level-easy-btn");
const levelButton2 = document.getElementById("level-medium-btn");
const levelButton3 = document.getElementById("level-excelsior-btn");
const rulesBox = document.getElementById("rules-modal");
const rulesButton = document.getElementById("rules-btn");
const rulesBoxClose = document.getElementById("close-rules-btn");
const mainGame = document.getElementById("question-box");
const questionSpace = document.getElementById("question");
const answerOption1 = document.getElementById("answer-btn1");
const answerOption2 = document.getElementById("answer-btn2");
const answerOption3 = document.getElementById("answer-btn3");
const answerOption4 = document.getElementById("answer-btn4");
let answerBtns = Array.from(document.getElementsByClassName('answer-button'));
const score_score_keep = document.getElementById("points");
const correct_score_keep = document.getElementById("correct");
const incorrect_score_keep = document.getElementById("incorrect");
const progressBarFull = document.getElementById("progress-bar-full");
const resultBox = document.getElementById("result-section");
const finalScore = document.getElementById("score");
const retryButton = document.getElementById("play-again");
const image = document.getElementById("img-result");

let currentQuestion = {}; //empty object which will be updated during the game with the question. Display question.
let acceptingAnswers = false; //helps with the time lag between questions.
let score = 0; //set the score to 0.
let questionCounter = 0; //set the question counter to 0.
let availableQuestions = []; //An empty array which will hold different questions depending on the game level.
let correctAns = 0; //Set the correct answer score tracker to 0.
let incorrectAns = 0; // Set the incorrect answer score tracker to 0.
let correctQ = 1; //To increment/decrement the corret and incorrect score tracker by 1. 
let correctBonus = 10; //To increment/decrement points depending on the answer by 10.
let maxQuestions = 10; //Number of questions displayed during each level. Used this for progressbar/to determine if the game is over.


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
});
//Reloads all the information so everything resets
retryButton.addEventListener('click', () => {
    welcomeBox.classList.remove("hide");
    rulesButton.classList.remove("hide");
    resultBox.classList.add("hide");
    window.location.reload();
});

//Easy level game. Upon pressing the easy level button, the function startGameEasy is being run. 
//The score and questionCounter are set to 0 and will be incremented as the game progresses. The available question
// array contains all the easy array elements(questions) from questions.js.
levelButton1.addEventListener('click',
    function startGameEasy() {
        questionCounter = 0;
        score = 0;
        welcomeBox.classList.add("hide");
        mainGame.classList.remove("hide");
        rulesButton.classList.add("hide");
        availableQuestions = [...easyQuestions];
        showNextQuestion();
    }
);

//Medium level game. Upon pressing the easy level button, the function startGameMedium is being run. 
//The score and questionCounter are set to 0 and will be incremented as the game progresses. The available question
// array contains all the medium array elements(questions) from questions.js.
levelButton2.addEventListener('click',
    function startGameMedium() {
        questionCounter = 0;
        score = 0;
        welcomeBox.classList.add("hide");
        mainGame.classList.remove("hide");
        rulesButton.classList.add("hide");
        availableQuestions = [...mediumQuestions];
        showNextQuestion();
    }
);
//Hard level game. Upon pressing the easy level button, the function startGameExcelsior is being run. 
//The score and questionCounter are set to 0 and will be incremented as the game progresses. The available question
// array contains all the excelsior array elements(questions) from questions.js.
levelButton3.addEventListener('click',
    function startGameExcelsior() {
        questionCounter = 0;
        score = 0;
        welcomeBox.classList.add("hide");
        mainGame.classList.remove("hide");
        rulesButton.classList.add("hide");
        availableQuestions = [...excelsiorQuestions];
        showNextQuestion();
    }
);

//This function displays questions and the relevant answer options to the user. 
//It checks whether a question should be displayed or not by checking how many questions are still available.
//If there are no questions left to display from the list, the screen switches to the result section and shows the 
//score along with a picture based on the score range.
//If there are question available, the function uses the questions from the availableQuestions array based on the
//game type and displays the question and answer property from the list to the HTML. The code also updates the progress
//bar as the questionCounter increases. 
function showNextQuestion() {
    if (availableQuestions.length === 0 || questionCounter >= maxQuestions) {
        mainGame.classList.add("hide");
        resultBox.classList.remove("hide");
        finalScore.innerText = score;
        if (score <= 30) {
            image.src = "assets/images/hulk.webp";
            image.alt = "Picture of Hulk";
        } else if (score <= 60) {
            image.src = "assets/images/cap.webp";
            image.alt = "Picture of Captain America";
        }

    }

    questionCounter++;
    progressBarFull.style.width = `${(questionCounter / maxQuestions) * 100}%`;
    const questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    if (currentQuestion === undefined) {
        return;
    }
    questionSpace.innerText = currentQuestion.question;
    answerBtns.forEach(answer => {
        const number = answer.dataset.number;
        answer.innerText = currentQuestion[number];
    });
    availableQuestions.splice(questionIndex, 1);
    acceptingAnswers = true;
    checkAnswer();

}

//Checks which answer was selected by the user and compares it to the correct answer.
//It shows the user the answer they chose and the correct answer if they chose incorrect by highlighting
//the answers. It removes the hover functionality so that the user cannot choose another option. 
//Based on the answer, the score is incremented/decremented by the value(s) defined above.
//The code also adds a time buffer of 2.5 seconds to move to the next question.
function checkAnswer() {
    answerBtns.forEach(answer => {
        answer.addEventListener('click', e => {
            if (!acceptingAnswers) return;
            acceptingAnswers = false;
            const selectedOption = e.target;
            const selectedAnswer = selectedOption.innerText;


            const classToApply = selectedAnswer == currentQuestion.correct ? "correct-ans" : "incorrect-ans";
            answerOption1.classList.remove("answer-button-hover");
            answerOption2.classList.remove("answer-button-hover");
            answerOption3.classList.remove("answer-button-hover");
            answerOption4.classList.remove("answer-button-hover");
            if (answerOption1.innerText == currentQuestion.correct) {
                answerOption1.classList.add('correct-ans');
            } else if (answerOption2.innerText == currentQuestion.correct) {
                answerOption2.classList.add('correct-ans');
            } else if (answerOption3.innerText == currentQuestion.correct) {
                answerOption3.classList.add('correct-ans');
            } else if (answerOption4.innerText == currentQuestion.correct) {
                answerOption4.classList.add('correct-ans');
            }

            if (classToApply == 'correct-ans') {
                incrementScore(correctBonus);
                incrementQuestionCorrect(correctQ);
            } else {
                incrementQuestionWrong(correctQ);
                incrementScore(-correctBonus);
            }

            selectedOption.classList.add(classToApply);

            setTimeout(() => {
                selectedOption.classList.remove(classToApply);

                showNextQuestion();
                resetQstate();
            }, 2500);

        });
    });

    let incrementScore = num => {
        score += num;
        score_score_keep.innerText = score;
    };
    let incrementQuestionCorrect = num => {
        correctAns += num;
        correct_score_keep.innerText = correctAns;
    };
    let incrementQuestionWrong = num => {
        incorrectAns += num;
        incorrect_score_keep.innerText = incorrectAns;
    };
}
// Reset the correct/incorrect answer highlights from previous question and enables the hover effect again. 
function resetQstate() {
    answerOption1.classList.remove('correct-ans');
    answerOption2.classList.remove('correct-ans');
    answerOption3.classList.remove('correct-ans');
    answerOption4.classList.remove('correct-ans');
    answerOption1.classList.add("answer-button-hover");
    answerOption2.classList.add("answer-button-hover");
    answerOption3.classList.add("answer-button-hover");
    answerOption4.classList.add("answer-button-hover");
}
