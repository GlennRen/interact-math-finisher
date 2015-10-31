// this is the code which will be injected into a given page...

(function() {
	var numOfProblems = document.getElementsByClassName("exercises")[0].getElementsByTagName("li").length; 
	var problems = document.getElementsByClassName("exercises")[0].getElementsByTagName("img"); 

	for (var i=0; i<numOfProblems; i++) {
		if(problems[i].src.match("spacer")){
		        problems[i].src = "images/overview_correct.gif";
		}
	}

	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[0].innerHTML = '<b>Attempted: </b>' + numOfProblems;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[1].innerHTML = '<b>Correct: </b>' + numOfProblems;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[2].innerHTML = '<b>Incorrect: </b>' + 0;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[3].innerHTML = '<b>Time Spent: </b>' + "07:04:00";
})();