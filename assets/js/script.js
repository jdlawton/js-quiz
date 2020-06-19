var scoreTimer = 0;
var next = 0;
var mainEl = window.document.querySelector("#main");
//create an array of objects, each object represents a question, the multiple choices, and the answer
var questionArray = [
    {
        text: "What parts of an HTML file can have JavaScript scripts added to them?",
        choice1: "The <body> section",
        choice2: "The <head> section",
        choice3: "Both the <head> and <body> sections are acceptable",
        choice4: "The <meta> section",
        answer: "choice3"
    },
    {
        text: "What is the correct way to declare an array in JavaScript?",
        choice1: 'var colors = "red", "green", "blue"',
        choice2: 'var colors = ["red", "green", "blue"]',
        choice3: 'var colors = (1:"red", 2:"green", 3:"blue")',
        choice4: 'var colors = 1 = ("red"), 2 = ("green"), 3 = ("blue")',
        answer: "choice2"
    },
    {
        text: "What operator is used to compare a value or variable?",
        choice1: "=",
        choice2: "===",
        choice3: "#",
        choice4: "<<",
        answer: "choice2"
    },
    {
        text: 'How do you write "Hello World" in an alert box?',
        choice1: 'alert("Hello World");',
        choice2: 'msgBox("Hello World");',
        choice3: 'msg("Hello World");',
        choice4: 'alertBox("Hello World");',
        answer: "choice1"
    },
    {
        text: "What operator is the AND operator?",
        choice1: "+",
        choice2: "&",
        choice3: "&&",
        choice4: "||",
        answer: "choice3"
    },
    {
        text: "What type of event occurs when an HTML element is clicked on?",
        choice1: "onchange",
        choice2: "onmouseclick",
        choice3: "onmouseover",
        choice4: "onclick",
        answer: "choice4"
    },
    {
        text: "What operator is the OR operator?",
        choice1: "+",
        choice2: "&",
        choice3: "&&",
        choice4: "||",
        answer: "choice4"
    },
    {
        text: 'How do you call a function named "myFunction"?',
        choice1: "call function myFunction()",
        choice2: "myFunction()",
        choice3: "call myFunction()",
        choice4: "call.myFunction()",
        answer: "choice2"
    },
    {
        text: "What operator is used to assign a value to a vairable?",
        choice1: "=",
        choice2: "===",
        choice3: "#",
        choice4: "<<",
        answer: "choice1"
    },
    {
        text: "How do you write a comment in JavaScript?",
        choice1: "'This is a comment",
        choice2: "<!-- This is a comment -->",
        choice3: "rem This is a comment",
        choice4: "//This is a comment",
        answer: "choice4"
    }
]


//dynamically create the header (view high scores link and timer)
var headerWrapperEl = window.document.querySelector("#header-wrapper");

//create the high score link
var highScoreLinkEl = document.createElement("a");
highScoreLinkEl.href = "#";
highScoreLinkEl.innerHTML = "View High Scores";
headerWrapperEl.appendChild(highScoreLinkEl);

//create the timer
var timerEl = document.createElement("p");
timerEl.innerHTML = "Time: " + scoreTimer;
headerWrapperEl.appendChild(timerEl);


//dynamically create the start screen
var questionWrapperEl = window.document.querySelector("#question-wrapper");

var titleEl = document.createElement("h2");
titleEl.innerHTML = "Coding Quiz Challenge"
questionWrapperEl.appendChild(titleEl);

var instructionsEl = document.createElement("p");
instructionsEl.innerHTML = "Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score/time by 10 seconds."
instructionsEl.id = "instructions";
questionWrapperEl.appendChild(instructionsEl);

var startBtnWrapperEl = document.createElement("div");
startBtnWrapperEl.id = "startBtn-wrapper";

var startBtnEl = document.createElement("button");
startBtnEl.className = "btn";
startBtnEl.id = "startBtn";
startBtnEl.innerHTML = "Start Quiz";

startBtnWrapperEl.appendChild(startBtnEl);
questionWrapperEl.appendChild(startBtnWrapperEl);

//The function that triggers when the Start Quiz button is clicked
var startBtnHandler = function () {

    /*//remove the instructions from the screen
    var questionWrapperEl = window.document.querySelector("#question-wrapper");
    var instructionsEl = window.document.querySelector("#instructions");
    questionWrapperEl.removeChild(instructionsEl);
    
    //remove the start button from the screen by removing the button wrapper and the button with it
    var startBtnWrapperEl = window.document.querySelector("#startBtn-wrapper");
    questionWrapperEl.removeChild(startBtnWrapperEl);

    */

    /*var mainEl = window.document.querySelector("#main");
    console.log(mainEl);
    var questionWrapperEl = window.document.querySelector("#question-wrapper");
    console.log (questionWrapperEl);
    mainEl.removeChild(questionWrapperEl);*/

    //loop through the array of questions, checking 
    for (var i = 0; i < questionArray.length; i++) {
        //console.log(questionArray[i]);
        nextQuestion(i);
    }
}

//function to display the next question in the array
var nextQuestion = function() {
    
    //delete the old question
    //var mainEl = window.document.querySelector("#main");
    //console.log(mainEl);
    var questionWrapperEl = window.document.querySelector("#question-wrapper");
    //console.log (questionWrapperEl);
    mainEl.removeChild(questionWrapperEl);


    
    //create a new question-wrapper for the next question
    //var mainEl = window.document.querySelector("#main");
    var questionWrapperEl = document.createElement("section");
    questionWrapperEl.className = "question-wrapper";
    questionWrapperEl.id = "question-wrapper";
    mainEl.appendChild(questionWrapperEl);


    //erase the old question
    //var mainEl = window.document.querySelector("#main");
    //mainEl.removeChild(questionWrapperEl);
    //if (window.document.querySelector("question-text")) {
    //    questionWrapperEl.removeChild(window.document.querySelector("#question-text"));
   // }

    var questionTextEl = document.createElement("h2");
    questionTextEl.textContent = questionArray[next].text;
    questionTextEl.id = "question-text";
    questionWrapperEl.appendChild(questionTextEl);
    var choiceOlEl = document.createElement("ol");
    //create answer choices in the OL
    var choice1El = document.createElement("li");
    choice1El.textContent = questionArray[next].choice1;
    choiceOlEl.appendChild(choice1El);

    var choice2El = document.createElement("li");
    choice2El.textContent = questionArray[next].choice2;
    choiceOlEl.appendChild(choice2El);

    var choice3El = document.createElement("li");
    choice3El.textContent = questionArray[next].choice3;
    choiceOlEl.appendChild(choice3El);

    var choice4El = document.createElement("li");
    choice4El.textContent = questionArray[next].choice4;
    choiceOlEl.appendChild(choice4El);

    //append the ol to the question wrapper
    questionWrapperEl.appendChild(choiceOlEl);
    next++;
    console.log(next);

    //questionWrapperEl.removeChild(window.document.querySelector("#question-text"));


}

//event listeners
startBtnEl.addEventListener("click", startBtnHandler);
mainEl.addEventListener("click", nextQuestion());