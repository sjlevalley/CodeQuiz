
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizPage = document.querySelector(".quizPage");
var pageHeader = document.querySelector(".pageHeader");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");


var secRemain = document.querySelector(".secRemain");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var answer = document.querySelector(".answer");
var correctIncorrectBox = document.querySelector(".correctIncorrectBox");

var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quizEndButtons = document.querySelector(".quizEndButtons");
var takeQuizAgain = document.querySelector(".takeQuizAgain");
var clearHighScores = document.querySelector(".clearHighScores");

var hasWon = false;
var finalScoreCount = document.querySelector(".finalScoreCount");
var userInitials = document.querySelector(".userInitials");

var answer1 = document.querySelector(".A");
var answer2 = document.querySelector(".B");
var answer3 = document.querySelector(".C");
var answer4 = document.querySelector(".D");




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
            correctA: "Good"
          },{ 
            question: "What is the weather?",
            answer1: "Sunny",
            answer2: "Cloudy",
            answer3: "Rainy",
            answer4: "Overcast",
            correctA: "Sunny"
          }
];

var count = 0;
var currentQuestion = 0;



function printQuestion () {
  var Q = questionBank[currentQuestion];
  question.textContent = Q.question;
  answer1.textContent = Q.answer1;
  answer2.textContent = Q.answer2;
  answer3.textContent = Q.answer3;
  answer4.textContent = Q.answer4;
  
}

printQuestion();




  // var buttons = document.querySelectorAll('button[name="questions"]');
  
  function checkAns () {
    var buttons = document.querySelectorAll('button[name="questions"]'); 

    var list = document.getElementsByName("questions"); //Client ID of the radiolist
    var inputs = list.getElementsByTagName("input");
    var selected;
    for (var i = 0; i < inputs.length; i++) {
         if (inputs[i].checked) {
             selected = inputs[i];
             break;
          }
     }
     if (selected) {
          alert(selected.value);
     }












// ########### Removes Start Page, Displays Quiz, Hides Start Quiz Button ############
function displayQuiz() {
  startPage.setAttribute("style", "display: none;");
  quizPage.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "display: none;");
}



// ############## Starts Timer on Button Click #############
function setTime(hasWon) {
  var secLeft = 75;
      var timeInterval = setInterval(function () {
          secLeft--;
        secRemain.textContent = secLeft;
        if(secLeft === 0) {
          clearInterval(timeInterval);
          secRemain.textContent= ("Time is Up!");
        } 
      }, 1000);}


// ############# When Start Button Clicked ##############
startQuizButton.addEventListener("click", setTime);
// startQuizButton.addEventListener("click", displayQuiz);

