var questionTitle = document.querySelector('.questionTitle')
var choiceEl = document.querySelector('.choices')
var startButton = document.querySelector(".start-btn");
var timerElement = document.querySelector(".timer-count");
var btnContainer = document.getElementsByClassName(".btn");
var userAnswer = ""
var correctAnswer = ""
var timerCount = 60;
var timer = " "
var submitButton = document.getElementById("quiz-finished")


var questions = [
  {
    question: "The condition in an if/ else statement is enclosed with _____. ",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: "2. curly brackets"
  },
  {
    question: "Commonly used data types do NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: "3. alerts"
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: "4. all of the above"
  },
  {
    question: "String values must be enclosed within____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
    answer: "3. quotes"
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: "4. console.log"
  }
]

var questionIndex = 0;

function checkAnswer() {
  console.log(this.textContent)
  userAnswer = this.textContent
  console.log(userAnswer, correctAnswer)
  if (userAnswer !== correctAnswer) {
    timerCount -= 10
    document.getElementById("message").innerHTML = "Wrong Answer"
  } else {
    document.getElementById("message").innerHTML = "Correct Answer"

 }
  questionIndex++
  displayQuestion()
}

function myFunction() {
  var x = document.getElementById("intro");
  if (x.style.display === "none") {
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

function startGame() {
  startButton.disabled = true;
  // document.querySelectorAll(".btn").forEach(function(button){
  document.getElementById("game-container").classList.toggle("hide")
  startTimer()
}


startButton.addEventListener("click", startGame);

function displayQuestion() {
  console.log(questionIndex)
  questionTitle.textContent = questions[questionIndex].question

  var choices = questions[questionIndex].choices

  choiceEl.textContent = ' '
  correctAnswer = questions[questionIndex].answer

 for (var i = 0; i < choices.length; i++) {
      var li = document.createElement('button')
    li.textContent = choices[i]
    li.classList.add("btn")
    choiceEl.appendChild(li)
    li.onclick = checkAnswer;
  }
}


function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    timerElement.textContent = timerCount;
    if (timerCount < 1) {
      clearInterval(timer);
     
    } else { timerCount--; console.log(timerCount) }
     }, 1000);
}

// function anotherFunction() {
//   if (choices.length > 4)
//   submitButton.classList.remove("hide");
//  else {
//   submitButton.classList.remove("show");


displayQuestion()