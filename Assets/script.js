

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
var score1 =  document.querySelector(".score1");
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
    
  }
}


// ################### functions to display correct/incorrect ######################

function dispCorrect () {
  correct.setAttribute("style", "display: flex;");
};
function dispIncorrect () {
  incorrect.setAttribute("style", "display: flex;");
};

// #################### function to move to the next array of questions/answers ####

function currentQ() {
  currentQuestion++;
}

// #################### Checks Answer To See If Correct ############################

function checkAns (event) {
      
      
      var target = event.target;
      if (target.textContent === questionBank[currentQuestion].correctA) {
        
        dispCorrect();
        setTimeout(function(){
          currentQ();}, 500);
        setTimeout(function(){
          
          printQuestion();}, 500);
        return;
      } else {
        secLeft-= 15;
        
        dispIncorrect();
        setTimeout(function(){
          currentQ();}, 500);
        setTimeout(function(){
          printQuestion();}, 500);
          
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
  currentQuestion = 0
  printQuestion();
  startPage.setAttribute("style", "display: none;");
  quizMain.setAttribute("style", "display: flex;");
  startQuizButton.setAttribute("style", "visibility: hidden;");
}


// ################################## Shows All Done Page ######################

function allDone() {
  allDonePage.setAttribute("style", "display: flex;");
  quizMain.setAttribute("style", "display: none;");
  correct.setAttribute("style", "display: none;");
  incorrect.setAttribute("style", "display: none;");
  finalScoreCount.textContent = secRemain.textContent;
 
}

function highScores(event) {
  event.preventDefault();
  highScoresPage.setAttribute("style", "display: flex;");
  allDonePage.setAttribute("style", "display: none;");
  return;
};


function reStart(event) {
  startPage.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "display: block;");
  highScoresPage.setAttribute("style", "display: none;");
  correct.setAttribute("style", "display: none;");
  incorrect.setAttribute("style", "display: none;");
  currentQuestion = 0;
  secLeft = 75;

  }

  playAgainButton.addEventListener("click", reStart);
  submitForm.addEventListener("submit", highScores);



  var secLeft = 75;


  // ##################### Function to start timer on Button Click ###################

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


  // ######################### When Start Button Clicked #############################

  startQuizButton.addEventListener("click", setTime);
  startQuizButton.addEventListener("click", displayQuiz);



var ScoreArray = [];
var player = document.querySelector(".player");
newHighScoresList = document.querySelector(".newHighScoresList");
var highSc1



  // The following function renders items in a todo list as <li> elements
function highScoreCount() {
  // Clear todoList element and update todoCountSpan
  
   
    var li = document.createElement("li");
    li.textContent = finalScoreCount.textContent + " - " + userInitials.value;

    newHighScoresList.appendChild(li);
  }


function storeScores() {
  localStorage.setItem("Scores", JSON.stringify(ScoreArray));
}

submitForm.addEventListener("submit", function(event){
  event.preventDefault();

  
ScoreArray.push(finalScoreCount.textContent);
storeScores();
highScoreCount();

});

function init() {
  // Get stored todos from localStorage
  var storedScores = JSON.parse(localStorage.getItem("Scores"));

  // If todos were retrieved from localStorage, update the todos array to it
  if (storedScores !== null) {
    ScoreArray = storedScores;
  }

  // This is a helper function that will render todos to the DOM
  highScoreCount();
}
init();







