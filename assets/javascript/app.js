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
	answer: 2
}];

var gifArray = ['question1', 'question2', 'question3', 'question4', 'question5', 'question6', 'question7', 'question8', 'question9', 'question10', 'question11', 'question12', 'question13','question14','question15'];
var currentQuestion; var correctAnswer; var incorrectAnswer; var unanswered; var seconds; var time; var answered; var userSelect;
var messages = {
	correct: "Correct wise one",
	incorrect: "You have failed.",
	endTime: "Quest time is all out!",
	finished: "Alright! Let's see how well you did."
}

