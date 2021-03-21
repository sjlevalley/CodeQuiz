
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizPage = document.querySelector(".quizPage");
var pageHeader = document.querySelector(".pageHeader");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var Radio = document.querySelector(".Radio");
var but1= document.querySelector(".but1");


var secRemain = document.querySelector(".secRemain");
var question = document.querySelector(".question");
var answerList = document.querySelector(".answerList");
var answers = document.getElementsByClassName("Radio");
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

var rb1 = document.getElementById("rb1").textContent;
var rb2 = document.getElementById("rb2");
var rb3 = document.getElementById("rb3");
var rb4 = document.getElementById("rb4");

var rb11 = document.getElementById("rb11");
var rb11 = document.getElementById("rb11");
var rb11 = document.getElementById("rb11");
var rb11 = document.getElementById("rb11");


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
  answer1.value = Q.answer1;
  rb11.textContent = Q.answer1; 
  answer2.value= Q.answer2;
  rb22.textContent = Q.answer2
  answer3.value = Q.answer3;
  rb33.textContent = Q.answer3
  answer4.value = Q.answer4;
  rb44.textContent = Q.answer4

}
printQuestion();

console.log(answers);

var correctAnswer = (questionBank[currentQuestion].correctA);
console.log(correctAnswer);

function checkAns(x) {
  x = showSelected();
  if (x == correctAnswer) {
    console.log("CORRECT!!!!!!!!!");
  }
}


function showSelected () {
  for (i = 0; i < answers.length; i++) {
    if (answers[i].checked == true) {
      console.log(answers[i].value);
      checkAns();
    };
}};





  

answerList.addEventListener("click", showSelected);


 



















// //  for (i = 0; i < answers.length; i++) {
// //    console.log(answers[i].value);
// //  }


 










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

