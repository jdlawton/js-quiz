var scoreTimer = 0;

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

var title = document.createElement("h2");
title.innerHTML = "Coding Quiz Challenge"
questionWrapperEl.appendChild(title);

var instructions = document.createElement("p");
instructions.innerHTML = "Try to answer the following code-related questions within the time limit.<br> Keep in mind that incorrect answers will penalize your score/time by 10 seconds."
instructions.id = "instructions";
questionWrapperEl.appendChild(instructions);

var startBtnWrapper = document.createElement("div");
startBtnWrapper.id = "startBtn-wrapper";

var startBtn = document.createElement("button");
startBtn.className = "btn";
startBtn.id = "startBtn";
startBtn.innerHTML = "Start Quiz";

startBtnWrapper.appendChild(startBtn);
questionWrapperEl.appendChild(startBtnWrapper);

//The function that triggers when the Start Quiz button is clicked
var startBtnHandler = function () {

    //remove the instructions from the screen
    var questionWrapperEl = window.document.querySelector("#question-wrapper");
    var instructions = window.document.querySelector("#instructions");
    questionWrapperEl.removeChild(instructions);
    
    //remove the start button from the screen by removing the button wrapper and the button with it
    var startBtnWrapper = window.document.querySelector("#startBtn-wrapper");
    questionWrapperEl.removeChild(startBtnWrapper);
}

//event listeners
startBtn.addEventListener("click", startBtnHandler);