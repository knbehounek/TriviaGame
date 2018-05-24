//Creates the Questions for the Game//

var triviaQuestions = [{
	question: "The word dragon comes from which greek word?",
	answerList: ["drako", "draconta", "dagon", "draxo"],
	answer: 1
},{
	question: "True of False Drake, Wyvern, Dragon, and wyrm are all the same?",
	answerList: ["True", "False"],
	answer: 1
},{
	question: "Which of the following spellcasters utilize dead?",
	answerList: ["Shamans", "Mage", "Druid", "Necromancers"],
	answer: 3
},{
	question: "In most cases knowledge is most coveted by spellcasters?",
	answerList: ["True", "False"],
	answer: 0
},{
	question: "Which one of the following don't rely on strength as a main trait?",
	answerList: ["Warrior", "Palidin", "Assassin", "Knight"],
	answer: 2
},{
	question: "Utilizing light doesn't pertain to which of the following?",
	answerList: ["Priest", "White Mage", "Paladin", "Warlock"],
	answer: 3
},{
	question: "True or False dragons varied from sizes ranging from chickens to miles long",
	answerList: ["True", "False"],
	answer: 0
},{
	question: "True or false armor dictated most for the outcome of a battle?",
	answerList: ["True", "False"],
	answer: 1
}];

//Creates a gifArray for each question

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];

//Creates need variables for functionality 
var currentQuestion; 
var correctAnswer; 
var incorrectAnswer; 
var unanswered;
var seconds; 
var time; 
var answered; 
var userSelect;
var messages = {
	correct: "Correct wise one",
	incorrect: "You have failed.",
	endTime: "Quest time is all out!",
	finished: "Alright! Let's see how well you did."
}

//Creates click event for start of game

$('#startBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//Creates click event for starting game over

$('#startOverBtn').on('click', function(){
	$(this).hide();
	newGame();
});

//Function for running new game

function newGame(){
	$('#finalMessage').empty();
	$('#correctAnswers').empty();
	$('#incorrectAnswers').empty();
	$('#unanswered').empty();
	currentQuestion = 0;
	correctAnswer = 0;
	incorrectAnswer = 0;
	unanswered = 0;
	newQuestion();
}

//Function for new question

function newQuestion(){
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();
	answered = true;
	
	//sets up new questions & answerList
	$('#currentQuestion').html('Question #'+(currentQuestion+1)+'/'+triviaQuestions.length);
	$('.question').html('<h2>' + triviaQuestions[currentQuestion].question + '</h2>');
	for(var i = 0; i < 4; i++){
		var choices = $('<div>');
		choices.text(triviaQuestions[currentQuestion].answerList[i]);
		choices.attr({'data-index': i });
		choices.addClass('thisChoice');
		$('.answerList').append(choices);
	}
	countdown();
	//clicking an answer will pause the time and setup answerPage
	$('.thisChoice').on('click',function(){
		userSelect = $(this).data('index');
		clearInterval(time);
		answerPage();
	});
}

//Function for Countdown intiation

function countdown(){
	seconds = 15;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	answered = true;
	//sets timer to go down
	time = setInterval(showCountdown, 1000);
}

//Function for showing countdown on page
function showCountdown(){
	seconds--;
	$('#timeLeft').html('<h3>Time Remaining: ' + seconds + '</h3>');
	if(seconds < 1){
		clearInterval(time);
		answered = false;
		answerPage();
	}
}

function answerPage(){
	$('#currentQuestion').empty();
	$('.thisChoice').empty(); //Clears question page
	$('.question').empty();

	var rightAnswerText = triviaQuestions[currentQuestion].answerList[triviaQuestions[currentQuestion].answer];
	var rightAnswerIndex = triviaQuestions[currentQuestion].answer;
	$('#gif').html('<img src = "assets/images/'+ gifArray[currentQuestion] +'.gif" width = "400px">');
	//checks to see correct, incorrect, or unanswered
	if((userSelect == rightAnswerIndex) && (answered == true)){
		correctAnswer++;
		$('#message').html(messages.correct);
	} else if((userSelect != rightAnswerIndex) && (answered == true)){
		incorrectAnswer++;
		$('#message').html(messages.incorrect);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
	} else{
		unanswered++;
		$('#message').html(messages.endTime);
		$('#correctedAnswer').html('The correct answer was: ' + rightAnswerText);
		answered = true;
	}
	
	if(currentQuestion == (triviaQuestions.length-1)){
		setTimeout(scoreboard, 5000)
	} else{
		currentQuestion++;
		setTimeout(newQuestion, 5000);
	}	
}

function scoreboard(){
	$('#timeLeft').empty();
	$('#message').empty();
	$('#correctedAnswer').empty();
	$('#gif').empty();

	$('#finalMessage').html(messages.finished);
	$('#correctAnswers').html("Correct Answers: " + correctAnswer);
	$('#incorrectAnswers').html("Incorrect Answers: " + incorrectAnswer);
	$('#unanswered').html("Unanswered: " + unanswered);
	$('#startOverBtn').addClass('reset');
	$('#startOverBtn').show();
	$('#startOverBtn').html('Start Over?');
}
