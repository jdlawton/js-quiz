var scoreWrapperEl = document.querySelector("#score-wrapper");
var btnWrapperEl = document.querySelector("#button-wrapper");

var loadScores = function () {

    var savedScores = localStorage.getItem("scores");
    
    if (!savedScores){
        console.log ("No Scores Yet :(");
        return false;
    }

    savedScores = JSON.parse(savedScores);

    //savedScores = sortScores(savedScores);
    savedScores.sort(function(a, b) {return a.score - b.score});
    console.dir(savedScores);

    var scoreListOl = document.createElement("ol");
    scoreWrapperEl.appendChild(scoreListOl);

    for (var i = savedScores.length-1; i > 0; i--) {
        var scoreListItem = document.createElement("li");
        console.log("attempting to display array index " + savedScores[i]);
        scoreListItem.innerHTML = savedScores[i].initials + " - " + savedScores[i].score;
        scoreListOl.appendChild(scoreListItem);
    }

return true;
}


var scoresLoaded = loadScores();
if (scoresLoaded === false){
    var emptyScoresEl = document.createElement("h2");
    emptyScoresEl.textContent = "No Scores Yet :(";
    scoreWrapperEl.appendChild(emptyScoresEl);
}

var returnBtnEl = document.createElement("button");
returnBtnEl.id = "return-button";
returnBtnEl.className = "btn";
returnBtnEl.textContent = "Go Back";
btnWrapperEl.appendChild(returnBtnEl);

var clearBtnEl = document.createElement("button");
clearBtnEl.id = "clear=scores";
clearBtnEl.className = "btn";
clearBtnEl.textContent = "Clear Scores";
btnWrapperEl.appendChild(clearBtnEl);

var goBack = function () {
    window.location.href = "./index.html";
}

var clearScores = function () {
    localStorage.clear();
    loadScores();
}

returnBtnEl.addEventListener("click", goBack);
clearBtnEl.addEventListener("click", clearScores);