// this is the code which will be injected into a given page...

(function() {
	function doubleDigits(num) {
		if (num.length == 1) {
			return "0" + num;
		}
		return num;
	}
	var numOfProblems = document.getElementsByClassName("exercises")[0].getElementsByTagName("li").length; 
	var problems = document.getElementsByClassName("exercises")[0].getElementsByTagName("img"); 
	var timePerProblem = 300; // seconds
	var totalTime = 0;
	var plusOrMinus; 

	for (var i=0; i<numOfProblems; i++) {
		if(problems[i].src.match("spacer")){
		        problems[i].src = "images/overview_correct.gif";
		}
		plusOrMinus = Math.random();
		if (plusOrMinus < .5) {
			totalTime += timePerProblem + Math.floor((Math.random() * 60) +  1);
		} else {
			totalTime += timePerProblem - Math.floor((Math.random() * 60) +  1);
		}
	}

	var hours = doubleDigits((Math.floor(totalTime/3600)).toString());
	var minutes =  doubleDigits(((Math.floor(totalTime/60))-(hours*60)).toString());
	var seconds = doubleDigits((totalTime - hours*3600 - minutes*60).toString());

	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[0].innerHTML = '<b>Attempted: </b>' + numOfProblems;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[1].innerHTML = '<b>Correct: </b>' + numOfProblems;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[2].innerHTML = '<b>Incorrect: </b>' + 0;
	document.getElementsByClassName("exSummary")[0].getElementsByTagName("div")[3].innerHTML = '<b>Time Spent: </b>' + hours + ":" + minutes + ":" + seconds;
})();