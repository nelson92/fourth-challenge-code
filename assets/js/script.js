var questionTitle = document.querySelector('.questionTitle')
var choiceEl = document.querySelector('.choices')
var startButton = document.querySelector(".start-btn");
var timerElement = document.querySelector(".timer-count");
var btnContainer = document.getElementsByClassName(".btn");
var userAnswer = ""
var correctAnswer = ""
var timerCount = 30;
var timer = " "

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
  },
  {
    question: "All done! Your Final score is:"
    // choices: ["Enter Initials: "],
    // answer: 4
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
  // isWin = false;

  // Prevents start button from being clicked when round is in progress
  startButton.disabled = true;
  // document.querySelectorAll(".btn").forEach(function(button){
  //   button.removeAttribute("disabled"  
  //   )
  // })
  // renderBlanks()
  document.getElementById("game-container").classList.toggle("hide")
  startTimer()
  // 1000);
}



startButton.addEventListener("click", startGame);

function displayQuestion() {
  console.log(questionIndex)
  //display question
  questionTitle.textContent = questions[questionIndex].question
  // btnContainer.
  // btnContainer.add();

  //display choices
  //loop through choices array 
  var choices = questions[questionIndex].choices

  choiceEl.textContent = ' '

  correctAnswer = questions[questionIndex].answer



  for (var i = 0; i < choices.length; i++) {
    //for each choice: 
    //create a li item
    var li = document.createElement('button')
    //display text value onto that li item
    li.textContent = choices[i]
    //append that li item to choiceEl container
    li.classList.add("btn")
    // li.setAttribute("disabled", "disabled")
    

    choiceEl.appendChild(li)
    li.onclick = checkAnswer;
  }
}


function startTimer() {
  // Sets timer
  timer = setInterval(function () {
    // timerCount--;
    timerElement.textContent = timerCount;


    // if (timerCount >= 0) {
    // Tests if win condition is met
    // if (isWin && timerCount > 0) {
    // Clears interval and stops timer
    // clearInterval(timer);
    // winGame();
    // }
    // )
    // }
    // Tests if time has run out
    if (timerCount < 1) {
      // Clears interval
      clearInterval(timer);
      // loseGame();
    } else { timerCount--; console.log(timerCount) }
    // console.log(timerCount)
  }, 1000);

}

// document.querySelectorAll(".btn").forEach((button) => {
//   button.addEventListener("click", checkAnswer)



// }
// )



displayQuestion()