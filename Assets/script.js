
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizPage = document.querySelector(".quizPage");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var answer = document.querySelector(".answer");
var correctIncorrectBox = document.querySelector(".correctIncorrectBox");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quizEndButtons = document.querySelector(".quizEndButtons");
var takeQuizAgain = document.querySelector(".takeQuizAgain");
var clearHighScores = document.querySelector(".clearHighScores");
var secRemain = 75




// ################# Timer Function ###############
function myTimer() {
    secRemain--;
    secRemain.textContent = secRemain;
};



// ############# When Start Button Clicked ##############

startQuizButton.addEventListener("click", function() {
    
    quizPage.setAttribute.display = 'none';
  });


