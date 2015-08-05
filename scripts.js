var correct = 9;
var incorrect = 1;
var attempted = correct+incorrect;

var numOfProblems = document.getElementById("exContainer").getElementsByTagName("li").length-5;
var hour = "00";
var minutes = "50";
var seconds = "34";
var time = hour +":"+ minutes +":"+ seconds;
var count = 1;
var change;

/*
var timePerProblem = 203;
var totalSeconds = attempted*timePerProblem;
var seconds = totalSeconds%60;
var minutes = Math.trunc(totalSeconds/60);
var hours = "00";**/

var scripts = document.getElementById('exContainer').getElementsByTagName("img");
while (count<attempted){
    change = Math.floor((Math.random() * numOfProblems) + 1);
    if(scripts[change].src.match("spacer")){
        scripts[change].src = "images/overview_correct.gif";
        count++;
    }
}
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[0].innerHTML = '<b>Attempted: </b>' + attempted;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[1].innerHTML = '<b>Correct: </b>' + correct;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[2].innerHTML = '<b>Incorrect: </b>' + incorrect;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[3].innerHTML = '<b>Time Spent: </b>' + time;