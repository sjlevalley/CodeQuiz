

// ###################### Global Variables ########################
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizMain = document.querySelector(".quizMain");
var pageHeader = document.querySelector(".pageHeader");

var secRemain = document.querySelector(".secRemain");

// var correctIncorrectBox = document.querySelector(".correctIncorrectBox");


var quizEndButtons = document.querySelector(".quizEndButtons");
var takeQuizAgain = document.querySelector(".takeQuizAgain");
var clearHighScores = document.querySelector(".clearHighScores");

var isDone = false;
var finalScoreCount = document.querySelector(".finalScoreCount");
var userInitials = document.querySelector(".userInitials");


var currentQuestion = 0;
var Question = document.querySelector(".Question");
var option1 = document.querySelector(".but1");
var option2 = document.querySelector(".but2");
var option3 = document.querySelector(".but3");
var option4 = document.querySelector(".but4");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var button = document.getElementsByName("button");
var buttonArr = Array.from(button);


var allDonePage = document.querySelector(".allDonePage");
var highScoresPage = document.querySelector(".highScoresPage");
var hsList = document.querySelector(".hsList");
var playAgainButton = document.querySelector(".playAgainButton");
var submitForm = document.querySelector(".submitForm");



// ################## Question Bank ##############################

var questionBank = [
          {
            question: "What did you have for dinner?", 
            answer1: "Steak",
            answer2: "Pizza",
            answer3: "Fries",
            answer4: "Cake",
            correctA: "Steak"
          },{ 
            question: "Where did you sleep?",
            answer1: "Home",
            answer2: "Park",
            answer3: "Car",
            answer4: "Train",
            correctA: "Home"
          },{ 
            question: "How do you feel?",
            answer1: "Good",
            answer2: "Bad",
            answer3: "Ugly",
            answer4: "Super Ugly",
            correctA: "Bad"
          },{ 
            question: "What is the weather?",
            answer1: "Sunny",
            answer2: "Cloudy",
            answer3: "Rainy",
            answer4: "Overcast",
            correctA: "Sunny"
          }
];



// ################## function to get question & answer set from array #############
function printQuestion () {
  if (currentQuestion < 4) {
    var Q = questionBank[currentQuestion];
    correct.setAttribute("style", "display: none;");
    incorrect.setAttribute("style", "display: none;");
    Question.textContent = Q.question;
    option1.textContent = Q.answer1;
    option2.textContent = Q.answer2;
    option3.textContent = Q.answer3;
    option4.textContent = Q.answer4; 
  } else {
    // window.alert("That's All the Questions");
  }
}


// ################### functions to display correct/incorrect ######################

function dispCorrect () {
  correct.setAttribute("style", "display: block;");
};
function dispIncorrect () {
  incorrect.setAttribute("style", "display: block;");
};

// #################### function to move to the next array of questions/answers ####
function currentQ() {
  currentQuestion++;
}



// #################### Checks Answer To See If Correct ############################

function checkAns (event) {
      
      
      var target = event.target;
      if (target.textContent === questionBank[currentQuestion].correctA) {
        // console.log(target.textContent);
        dispCorrect();
        setTimeout(function(){
          currentQ();}, 1000);
        setTimeout(function(){
          
          printQuestion();}, 1000);
        return;
      } else {
        secLeft-= 15;
        // console.log("INCORRECT");
        dispIncorrect();
        setTimeout(function(){
          currentQ();}, 1000);
        setTimeout(function(){
          printQuestion();}, 1000);
          
        return;
      };
    };

   // #################### Initial Print Question & Click Activate ####################

  printQuestion();

  buttonArr.forEach(function(button){
    button.addEventListener("click", checkAns);
  })

  // ##### function to Removes Start Page, Displays Quiz, Hides Start Quiz Button #####
function displayQuiz() {
  startPage.setAttribute("style", "display: none;");
  quizMain.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "visibility: hidden;");
}



function allDone() {
  allDonePage.setAttribute("style", "display: block;");
  quizMain.setAttribute("style", "display: none;");
  finalScoreCount.textContent = secRemain.textContent;
  console.log("HeyHey");
}

function highScores(event) {
  console.log("HelloHelloHelloHello");
  event.preventDefault();
  highScoresPage.setAttribute("style", "display: block;");
  allDonePage.setAttribute("style", "display: none;");
  return;
};


  // highScoresPage.setAttribute("style", "display: block;");
  // allDonePage.setAttribute("style", "display: none;");
  // return;


function reStart(event) {
  startPage.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "display: block;");
  highScoresPage.setAttribute("style", "display: none;");

  }

  playAgainButton.addEventListener("click", reStart);
  submitForm.addEventListener("submit", highScores);



  var secLeft = 75;


  // ##################### Function to start timer on Button Click #####################
function setTime(isDone) {
      // var secLeft = 75;
      var timeInterval = setInterval(function () {
          secLeft--;
        secRemain.textContent = secLeft;
        if(secLeft === 0 || currentQuestion > 3) {
          clearInterval(timeInterval);
          allDone();
          // highScores();
        } 
      }, 1000);}

// var todos = [];


// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//     // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];

//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);

//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

  

  // ######################### When Start Button Clicked ################################
  startQuizButton.addEventListener("click", setTime);
  startQuizButton.addEventListener("click", displayQuiz);

  // submitForm.addEventListener("click", function(event){
  //   console.log("SUBMIT!");
  //   localStorage.setItem("Initials", );
  // });

  // localStorage.setItem("Initials", 74);