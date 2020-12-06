//grab all the elements from the html file

var questionEl = document.querySelector("#question-text")
var choicesEl = document.querySelectorAll("li")
var choice1El = document.querySelector(".choice1")
var choice2El = document.querySelector(".choice2")
var choice3El = document.querySelector(".choice3")
var choice4El = document.querySelector(".choice4")
var scoreTextEl = document.querySelector(".score")
var counterEl = document.querySelector("#counter")
var answerDisplay = document.querySelector(".answer-display")
var highScore = document.querySelector(".high-score")
var startBtn = document.querySelector("#start")



// object array with the questions, choices and correct answer
var questions = [
    {
        question: "Commonly used data types DO NOT inlude:",
        choice1: "Strings",
        choice2: "Booleans",
        choice3: "Alerts",
        choice4: "Numbers",
        answer: 3
    },
    {
        question: "A very useful tool used during development and debugging for printing vontent to the debugger is:",
        choice1: "JavaScript",
        choice2: "terminal/bash",
        choice3: "for loops",
        choice4: "console.log",
        answer: 4
    },
    {
        question: "String values must be enclosed within ____ when being assigned to variables.",
        choice1: "commas",
        choice2: "curly brackets",
        choice3: "quotes",
        choice4: "parentheses",
        answer: 3
    },
    {
        question: "Arrays in JavaScript can be used to store ____.",choice1: "numbers and strings",
        choice2: "other arrays",
        choice3: "booleans",
        choice4: "all of the above",
        answer: 4
    },
    {
        question: "The condition in an if/else statement is enclosed with ____.",
        choice1: "quotes",
        choice2: "curly brackets",
        choice3: "parantheses",
        choice4: "square brackets",
        answer: 2
    }
];

// set starting point for quiz
var score = 0 
var selectedQuestion = 0
var endQuestion = questions.length -1
var seconds = 50
var countdown;

// timer function to display the seconds 
function counter() {
    setInterval(function () {
            if(seconds <=0) {
                clearInterval(seconds = 0)
            }
            counterEl.innerHTML = seconds
            seconds -=1
    }, 1000)

    startBtn.addEventListener("click", counter())
    }  

    


function newQuestion () {
    var questionText = questions[selectedQuestion]
    questionEl.innerHTML = questionText.question
    choice1El.innerHTML = questionText.choice1
    choice2El.innerHTML = questionText.choice2
    choice3El.innerHTML = questionText.choice3
    choice4El.innerHTML = questionText.choice4
}
// checking to see if the user selection matches the answer in the array



function userSelect(value) {
        if(value == questions[selectedQuestion].answer) {
        score++
        answerDisplay.innerHTML = "Correct!"
     } else {
        answerDisplay.innerHTML = "Wrong"
        }

    if (selectedQuestion < endQuestion) {
        selectedQuestion++
        newQuestion()
    } else {
        quizOver()
    }

}


function keepScore() {
    localStorage.setItem("high-score", score)
}

