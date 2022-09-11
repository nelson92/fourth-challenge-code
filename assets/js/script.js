var questionTitle = document.querySelector('.questionTitle')
var choiceEl = document.querySelector('.choices')
var startButton = document.querySelector(".start-btn");

var questions = [
  {
    question: "The condition in an if/ else statement is enclosed with _____. ",
    choices: ["1. quotes", "2. curly brackets", "3. parenthesis", "4. square brackets"],
    answer: 2
  },
  {
    question: "Commonly used data types do NOT include:",
    choices: ["1. strings", "2. booleans", "3. alerts", "4. numbers"],
    answer: 3
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: 4
  },
  {
    question: "Arrays in JavaScript can be used to store _____.",
    choices: ["1. numbers and strings", "2. other arrays", "3. booleans", "4. all of the above"],
    answer: 4
  },
  {
    question: "String values must be enclosed within____ when being assigned to variables.",
    choices: ["1. commas", "2. curly brackets", "3. quotes", "4. paranthesis"],
    answer: 3
  },
  {
    question: "A very useful tool used during development and debugging for printing content to the debugger is:",
    choices: ["1. JavaScript", "2. terminal/bash", "3. for loops", "4. console.log"],
    answer: 4
  }
]

var questionIndex = 0;

function checkAnswer() {
console.log(this)
//compare this value to answer in question array
//hint: textContent to return value


  //when one of the choices is clicked
//check IF you are at the end of the array already, if not, the
//increase questionIndex
  questionIndex++
  //call displayQuestion again
  displayQuestion()

}

function startGame() {
  isWin = false;
  timerCount = 30;
  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  renderBlanks()
  startTimer()
}



startButton.addEventListener("click", startGame);

function displayQuestion() {
  console.log(questionIndex)
  //display question
  questionTitle.textContent = questions[questionIndex].question

  //display choices
  //loop through choices array 
  var choices = questions[questionIndex].choices

  choiceEl.textContent = ''
  for (var i = 0; i < choices.length; i++) {
    //for each choice: 
    //create a li item
    var li = document.createElement('li')
    //display text value onto that li item
    li.textContent = choices[i]
    //append that li item to choiceEl container
    choiceEl.appendChild(li)
    li.onclick = checkAnswer;
  }
}

displayQuestion()