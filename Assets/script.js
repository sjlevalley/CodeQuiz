
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");

var startQuizButton = document.querySelector(".startQuizButton");
var quizPage = document.querySelector(".quizPage");
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


function setTime(hasWon) {
    var secLeft = 75;
        var timeInterval = setInterval(function () {
            secLeft--;
          secRemain.textContent = secLeft;
          if(secLeft === 0 || hasWon === true) {
            clearInterval(timeInterval);
            secRemain.textContent= ("Time is Up!");
          }
        }, 1000);}

startQuizButton.addEventListener("click", setTime);



// ############# When Start Button Clicked ##############
