

// ###################### Global Variables ########################
var header = document.querySelector(".header");
var startPage = document.querySelector(".startPage");
var startQuizButton = document.querySelector(".startQuizButton");
var quizMain = document.querySelector(".quizMain");
var pageHeader = document.querySelector(".pageHeader");
var correct = document.querySelector(".correct");
var incorrect = document.querySelector(".incorrect");
// var Radio = document.querySelector(".Radio");
// var but1= document.querySelector(".but1");


var secRemain = document.querySelector(".secRemain");

var correctIncorrectBox = document.querySelector(".correctIncorrectBox");


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
    window.alert("That's All the Questions");
  }
}


// ######## functions to display correct/incorrect #########

function dispCorrect () {
  correct.setAttribute("style", "display: block;");
};
function dispIncorrect () {
  incorrect.setAttribute("style", "display: block;");
};

// ########### function to move to the next array of questions/answers ##############
function currentQ() {
  currentQuestion++;
}



var button = document.getElementsByName("button");
var buttonArr = Array.from(button);



// ################## Checks Answer To See If Correct ##############

function checkAns (event) {
  // console.log(event.target);
    // for (i=0; i<buttonArr.length; i++) {
    //   console.log(buttonArr[i].textContent);
      var target = event.target;
      if (target.textContent === questionBank[currentQuestion].correctA) {
        // console.log(target.textContent);
        correct.setAttribute("style", "display: block;");
        setTimeout(function(){
          currentQ();}, 1000);
        setTimeout(function(){
          printQuestion();}, 1000);
        return;
      } else {
        secLeft -= 15;
        incorrect.setAttribute("style", "display: block;");
        setTimeout(function(){
          currentQ();}, 1000);
        setTimeout(function(){
          printQuestion();}, 1000);
        return;
      };
    };

   


  printQuestion();

  buttonArr.forEach(function(button){
    button.addEventListener("click", checkAns);
  })

 
 
  












// ########### Removes Start Page, Displays Quiz, Hides Start Quiz Button ############
function displayQuiz() {
  startPage.setAttribute("style", "display: none;");
  // quizPage.setAttribute("style", "display: block;");
  startQuizButton.setAttribute("style", "visibility: hidden;");
}

var secLeft = 75;

// ############## Starts Timer on Button Click #############
function setTime(isDone) {
  // var secLeft = 75;
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



