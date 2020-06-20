//global variables
var scoreTimer = 60; //the quiz's timer, remaining time is used as player score.
var currentQuestionIndex = -1; //keeps track of what question the quiz is currently on, used to advance through the array.
var numCorrect = 0; //tracks the number of correct answers
//create an array of objects, each object represents a question, the multiple choices, and the answer
var questionArray = [
    {
        text: "What parts of an HTML file can have JavaScript scripts added to them?",
        choice1: "The <body> section",
        choice2: "The <head> section",
        choice3: "Both the <head> and <body> sections are acceptable",
        choice4: "The <meta> section",
        answer: "3"
    },
    {
        text: "What is the correct way to declare an array in JavaScript?",
        choice1: 'var colors = "red", "green", "blue"',
        choice2: 'var colors = ["red", "green", "blue"]',
        choice3: 'var colors = (1:"red", 2:"green", 3:"blue")',
        choice4: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        answer: "2"
    },
    {
        text: "What operator is used to compare a value or variable?",
        choice1: "=",
        choice2: "===",
        choice3: "#",
        choice4: "<<",
        answer: "2"
    },
    {
        text: 'How do you write "Hello World" in an alert box?',
        choice1: 'alert("Hello World");',
        choice2: 'msgBox("Hello World");',
        choice3: 'msg("Hello World");',
        choice4: 'alertBox("Hello World");',
        answer: "1"
    },
    {
        text: "What operator is the AND operator?",
        choice1: "+",
        choice2: "&",
        choice3: "&&",
        choice4: "||",
        answer: "3"
    },
    {
        text: "What type of event occurs when an HTML element is clicked on?",
        choice1: "onchange",
        choice2: "onmouseclick",
        choice3: "onmouseover",
        choice4: "onclick",
        answer: "4"
    },
    {
        text: "What operator is the OR operator?",
        choice1: "+",
        choice2: "&",
        choice3: "&&",
        choice4: "||",
        answer: "4"
    },
    {
        text: 'How do you call a function named "myFunction"?',
        choice1: "call function myFunction()",
        choice2: "myFunction()",
        choice3: "call myFunction()",
        choice4: "call.myFunction()",
        answer: "2"
    },
    {
        text: "What operator is used to assign a value to a vairable?",
        choice1: "=",
        choice2: "===",
        choice3: "#",
        choice4: "<<",
        answer: "1"
    },
    {
        text: "How do you write a comment in JavaScript?",
        choice1: "'This is a comment",
        choice2: "<!-- This is a comment -->",
        choice3: "rem This is a comment",
        choice4: "//This is a comment",
        answer: "4"
    }
]

//elements retrieved from the HTML document, used for dynamically managing the web page contents.
var headerWrapperEl = document.querySelector("#header-wrapper");
var mainEl = document.querySelector("#main");
var questionWrapperEl = document.querySelector("#question-wrapper");

/////////////////////////////END GLOBAL VARIABLES///////////////////////////////////////


//dynamically create the view high scores link and timer in the header section
var highScoreLinkEl = document.createElement("a");
highScoreLinkEl.href = "#";
highScoreLinkEl.innerHTML = "View High Scores";
headerWrapperEl.appendChild(highScoreLinkEl);

var timerEl = document.createElement("p");
timerEl.innerHTML = "Time: " + scoreTimer;
headerWrapperEl.appendChild(timerEl);


//dynamically create the start screen

//create the quiz title. The element the title is written to in the HTML will also server as where the questions will go
var questionTextEl = document.createElement("h2");
questionTextEl.textContent = "Coding Quiz Challenge";
questionWrapperEl.appendChild(questionTextEl);

//create the quiz instructions. These will be removed once the start button is clicked.
var instructionsEl = document.createElement("p");
instructionsEl.innerHTML = "Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score/time by 10 seconds."
instructionsEl.id = "instructions";
questionWrapperEl.appendChild(instructionsEl);

//the button wrapper is needed to get the style the start button correctly
var startBtnWrapperEl = document.createElement("div");
startBtnWrapperEl.id = "startBtn-wrapper";

//the start button calls initializeQuiz function when clicked, it is removed once the quiz starts
var startBtnEl = document.createElement("button");
startBtnEl.className = "btn";
startBtnEl.id = "startBtn";
startBtnEl.innerHTML = "Start Quiz";
startBtnWrapperEl.appendChild(startBtnEl);
questionWrapperEl.appendChild(startBtnWrapperEl);


//this function prepares the quiz for running by removing the unneeded start button and instructions, then calls
//the nextQuestion function to display the first question.
var initializeQuiz = function () {
    questionWrapperEl.removeChild(instructionsEl);
    questionWrapperEl.removeChild(startBtnWrapperEl);

    //console.log("Inside startQuiz function.");
    //console.log(currentQuestionIndex);

    var choiceOlEl = document.createElement("ol");
    questionWrapperEl.appendChild(choiceOlEl);

    var choice1El = document.createElement("li");
    choice1El.setAttribute("choice-number", "1");
    choice1El.id = "choice1";
    //choice1El.textContent = questionArray[currentQuestionIndex].choice1;
    choiceOlEl.appendChild(choice1El);

    var choice2El = document.createElement("li");
    choice2El.setAttribute("choice-number", "2");
    choice2El.id = "choice2";
    //choice2El.textContent = questionArray[currentQuestionIndex].choice2;
    choiceOlEl.appendChild(choice2El);

    var choice3El = document.createElement("li");
    choice3El.setAttribute("choice-number", "3");
    choice3El.id = "choice3";
    //choice3El.textContent = questionArray[currentQuestionIndex].choice3;
    choiceOlEl.appendChild(choice3El);

    var choice4El = document.createElement("li");
    choice4El.setAttribute("choice-number", "4");
    choice4El.id = "choice4";
    //choice4El.textContent = questionArray[currentQuestionIndex].choice4;
    choiceOlEl.appendChild(choice4El);

    scoreTimerCountdown();
}

//function to display the next question in the array
var nextQuestion = function() {
    //debugger;
    console.log ("index = " + currentQuestionIndex);
    //currentQuestionIndex++;
    
    var targetEl = event.target;
    var answer = targetEl.getAttribute("choice-number");
    if (answer){
        console.log ("Checking Answer...");
        console.log ("Checking answer for question :" + currentQuestionIndex);
        console.log ("You answered: " + answer);
        console.log ("Array answer is: " + questionArray[currentQuestionIndex].answer);
        if (answer===questionArray[currentQuestionIndex].answer){
            console.log ("You are correct!");
        }
        else {
            console.log ("You are wrong");
        }
    }
    //console.log (questionArray);
    //console.log (questionArray[currentQuestionIndex]);
    //console.log ("The correct answer is: " + questionArray[currentQuestionIndex].answer);
    /*if ( answer === questionArray[currentQuestionIndex].answer) {
        console.log("You are correct");
    } 
    else {
        console.log("You are wrong");
    }*/

    //checks if we have reached the end of the quiz. If not, display the next question.
    if (currentQuestionIndex+1 < questionArray.length){
        //debugger;
        //console.log("displaying next");
        //console.log("Current Question: " + currentQuestionIndex);
        //console.log("Inside nextQuestion function.");
        //console.log("Displaying quesion # " + currentQuestionIndex);

        //update the question and all of the choices
        currentQuestionIndex++;
        questionTextEl.textContent = questionArray[currentQuestionIndex].text;
        var choice1El = document.querySelector("#choice1");
        choice1El.textContent = questionArray[currentQuestionIndex].choice1;
        var choice2El = document.querySelector("#choice2");
        choice2El.textContent = questionArray[currentQuestionIndex].choice2;
        var choice3El = document.querySelector("#choice3");
        choice3El.textContent = questionArray[currentQuestionIndex].choice3;
        var choice4El = document.querySelector("#choice4");
        choice4El.textContent = questionArray[currentQuestionIndex].choice4;
        //currentQuestionIndex++;
    }
    else {
        alert("Congratulations!");
    }
    
    //currentQuestionIndex++;

}

var scoreTimerCountdown = function() {

    var timeInterval = setInterval(function() {
        if (scoreTimer > 0) {
            console.log (scoreTimer + " seconds left");
            scoreTimer--;
        }
        else {
            console.log ("Out of time");
            clearInterval(timeInterval);
        }
    }, 1000);
}

//event listeners
startBtnEl.addEventListener("click", initializeQuiz);
//startBtnEl.addEventListener("click", scoreTimerCountdown);
questionWrapperEl.addEventListener("click",nextQuestion);