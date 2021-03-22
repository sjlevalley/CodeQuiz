
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizMain = document.querySelector(".quizMain");
var pageHeader = document.querySelector(".pageHeader");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var Radio = document.querySelector(".Radio");
var but1= document.querySelector(".but1");


var secRemain = document.querySelector(".secRemain");

var correctIncorrectBox = document.querySelector(".correctIncorrectBox");

var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
var quizEndButtons = document.querySelector(".quizEndButtons");
var takeQuizAgain = document.querySelector(".takeQuizAgain");
var clearHighScores = document.querySelector(".clearHighScores");

var hasWon = false;
var finalScoreCount = document.querySelector(".finalScoreCount");
var userInitials = document.querySelector(".userInitials");




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

var currentQuestion = 0;

var Question = document.querySelector(".Question");
var option1 = document.querySelector(".but1");
var option2 = document.querySelector(".but2");
var option3 = document.querySelector(".but3");
var option4 = document.querySelector(".but4");

function printQuestion () {
  var Q = questionBank[currentQuestion];
  Question.textContent = Q.question;
  option1.textContent = Q.answer1;
  option2.textContent = Q.answer2;
  option3.textContent = Q.answer3;
  option4.textContent = Q.answer4;
}
printQuestion();

var button = document.getElementsByName("button");

console.log(button);

function checkAns1 () {
    if (option1.textContent === questionBank[currentQuestion].correctA) {
      window.alert("Correct!");
    } else {
      console.log("WRONG!");
    };
    nextQuestion();
  }
function checkAns2 () {
    if (option2.textContent === questionBank[currentQuestion].correctA) {
      window.alert("Correct!");
    } else {
      window.alert("WRONG!");
    };
    nextQuestion();
  }
function checkAns3 () {
    if (option3.textContent === questionBank[currentQuestion].correctA) {
      window.alert("Correct!");
    } else {
      window.alert("WRONG!");
    };
    nextQuestion();
  }
function checkAns4 () {
    if (option4.textContent !== questionBank[currentQuestion].correctA) {
      window.alert("Correct!");
    } else {
      window.alert("WRONG!");
    };
    nextQuestion();
  }

  function nextQuestion() {
    currentQuestion = currentQuestion++;
  }


  option1.addEventListener("click", checkAns1);
  option2.addEventListener("click", checkAns2);
  option3.addEventListener("click", checkAns3);
  option4.addEventListener("click", checkAns4);
  
nextQuestion();











// ########### Removes Start Page, Displays Quiz, Hides Start Quiz Button ############
function displayQuiz() {
  startPage.setAttribute("style", "display: none;");
  // quizPage.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "visibility: hidden;");
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
startQuizButton.addEventListener("click", displayQuiz);

// startQuizButton.addEventListener("click", displayQuiz);

