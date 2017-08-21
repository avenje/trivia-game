$(document).ready(function() {
	var index = 0;
	var countdownTimer = {
		time : 15,
		reset: function() {
			this.time = 15;
			$('.timer').html('<h3>' + this.time + ' seconds remaining</h3>');
		},
		start: function() {
			counter = setInterval(countdownTimer.count, 1000);	
		},
		stop: function() {
			clearInterval(counter);
		},
		count: function() {
				countdownTimer.time--;
				console.log(countdownTimer.time);
			if (countdownTimer.time >= 0) {
				$('.timer').html('<h3>' + countdownTimer.time + ' seconds remaining</h3>');
			}
			else {
				index++;
				answerWrong();
				countdownTimer.reset();
				if (index < questionArray.length) {
					loadQuestion(index);
				} else {
					$(".answerchoice").hide();
					showScore();
				}
			}
		}
	};

var correct = 0;
var wrong = 0;
var q1 = {
	question : "What U.S. state capital's space-age new airport was plagued by software problems that kept dumping baggage all over the basement?",
	possibleAnswers : ["Atlanta","Des Moines","Denver","Nashville"],
	flags : [false, false, true, false],
	answer : "Denver"
};

var q2 = {
	question: "What was Bill Gates demonstrating at a 1998 Chicago trade fair, when it crashed on him?",
	possibleAnswers: ["XBox","Windows 95","Paint","Windows 98"],
	flags : [false, false, false, true],
	answer : "Windows 98"
};

var q3 = {
	question : "What term did Internet users borrow from angling to indicate a person who goes fishing for trouble?",
	possibleAnswers : ["Catfishing","Troll","Casting","Sinker"],
	flags : [false, true, false, false],
	answer : "Troll"
};

var q4 = {
	question : "What browser company adopted a dinosaur named Mozilla as its corporate mascot?",
	possibleAnswers : ["Netscape","Microsoft","Firefox","Google"],
	flags : [true, false, false, false],
	answer : "Netscape"
};

var q5 = {
	question : "What tech giant came up with the Universal Serial Bus to carry computer data?",
	possibleAnswers : ["Apple","Microsoft","Intel","AMD"],
	flags : [false, false, true, false],
	answer : "Intel"
};

var q6 = {
	question : "What company hyped its Jaguar as the first 64-bit gaming system, because it had two 32-bit processors running in parallel?",
	possibleAnswers : ["Atari","Nintendo","Sega","Commodore"],
	flags : [true, false, false, false],
	answer : "Atari"
};

var q7 = {
	question : "What country was the World Wide Web invented in?",
	possibleAnswers : ["USA","Canada","Russia","Switzerland"],
	flags : [false, false, false, true],
	answer : "Switzerland"
};

var q8 = {
	question : "What website became famous for faux-news headlines like: 'Clinton Deploys Vowels to Bosnia' and 'Death Star to Open Day Care Center'?",
	possibleAnswers : ["Fox News","CNN","The Onion","MTV"],
	flags : [false, false, true, false],
	answer : "The Onion"
};

var q9 = {
	question : "How many websites were there in June 1996, for every one in June 1993?",
	possibleAnswers : ["18","80","180","1800"],
	flags : [false, false, false, true],
	answer : "1800"
};

var q10 = {
	question : "What computer outfit's ad '1984', ran only once during the Super Bowl XVIII, did TV Guide declare to be the best commercial of all time, in 1999?",
	possibleAnswers : ["Apple","Microsoft","IBM","Dell"],
	flags : [true, false, false, false],
	answer : "Apple"
}

var questionArray = [q1, q2, q3, q4, q5, q6, q7, q8, q9, q10];

function loadQuestion(questionSelection) {
	console.log(questionSelection);
	countdownTimer.reset();
  $(".question").html("<h3>" + questionArray[questionSelection].question + "</h3>");
  $("#buttonA").text(questionArray[questionSelection].possibleAnswers[0]).show();
  $("#buttonB").text(questionArray[questionSelection].possibleAnswers[1]).show();
  $("#buttonC").text(questionArray[questionSelection].possibleAnswers[2]).show();
  $("#buttonD").text(questionArray[questionSelection].possibleAnswers[3]).show();
}


function setup() {
	index = 0;
	$('.question').append('<button id="startButton">Start</button>');
	$('#startButton').on('click', function() {
		$(this).hide();
		countdownTimer.start();
	 	loadQuestion(index);
	});
}		

function getAnswer() {
	$('.answerchoice').on('click', function() {
	  console.log('alert', index);
		index++;
		console.log('click', index);
		$(".question").text('');
		$("#buttonA").text('');
		$("#buttonB").text('');
		$("#buttonC").text('');
		$("#buttonD").text('');
		loadQuestion();
	})
}

function answerCorrect() {
	correct++;
	alert("Correct!");
	console.log("correct");
}

function answerWrong() {
	wrong++;
	alert("Incorrect!");
	console.log("wrong");
}

function showScore() {
	$('.question').empty();
	$('.question').append("<h2><p>" + correct + " correct</p></h2>");
	$('.question').append("<h2><p>" + wrong + " incorrect</p></h2>");
	countdownTimer.stop();
	$('.timer').empty();
}

setup();
$('.answerchoice').on('click', function() {
 console.log($(this));
 if(this.id == 'buttonA') {
 	var answerChosen = 'A';
 } else if(this.id == 'buttonB') {
 	answerChosen = 'B';
 } else if (this.id == 'buttonC') {
 	answerChosen = 'C';
 } else if (this.id == 'buttonD') {
 	answerChosen = 'D';
 } 
 if ((answerChosen == 'A') && (questionArray[index].flags[0] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'A') {
 	answerWrong();
 }
 if ((answerChosen == 'B') && (questionArray[index].flags[1] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'B') {
 	answerWrong();
 }
if ((answerChosen == 'C') && (questionArray[index].flags[2] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'C') {
 	answerWrong();
 }
if ((answerChosen == 'D') && (questionArray[index].flags[3] == true)) {
 	answerCorrect();
 } else if (answerChosen == 'D') {
 	answerWrong();
 }

 $(".question").text('');
 $("#buttonA").text('');
 $("#buttonB").text('');
 $("#buttonC").text('');
 $("#buttonD").text('');
 index++;
 if (index < questionArray.length) {
 	loadQuestion(index);
 } else {
 	$(".answerchoice").hide();
 	showScore();
 }
});

});


