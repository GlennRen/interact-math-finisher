var correct       = document.getElementById('correct').value;
var incorrect     = document.getElementById('incorrect').value;
var attempted     = correct+incorrect;
var numOfProblems = document.getElementById("exContainer").getElementsByTagName("li").length-5;
var hour          = document.getElementById('hour').value;
var minute        = document.getElementById('minute').value;
var second        = document.getElementById('second').value;
var time          = hour +":"+ minutes +":"+ seconds;
var count         = 0;
var change;

var scripts = document.getElementById('exContainer').getElementsByTagName("img");
while (count<correct){
    change = Math.floor((Math.random() * numOfProblems) + 1);
    if(scripts[change].src.match("spacer")){
        scripts[change].src = "images/overview_correct.gif";
        count++;
    }
}
count = 0;
while (count<incorrect){
    change = Math.floor((Math.random() * numOfProblems) + 1);
    if(scripts[change].src.match("spacer")){
        scripts[change].src = "images/overview_incorrect.gif";
        count++;
    }
}
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[0].innerHTML = '<b>Attempted: </b>' + attempted;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[1].innerHTML = '<b>Correct: </b>' + correct;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[2].innerHTML = '<b>Incorrect: </b>' + incorrect;
document.getElementById("exContainer").getElementsByClassName("exSummary")[0].getElementsByTagName("div")[3].innerHTML = '<b>Time Spent: </b>' + time;