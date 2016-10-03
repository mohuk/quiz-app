function getQuizQuestions(){
	$.ajax('questions.json')
		.then(startQuiz);
}

getQuizQuestions();


function startQuiz(questions) {
	nextQuestion(questions[0]);
}

function nextQuestion(question){
	$('#question').text(question.question);
	
	for(var i = 0; i < question.options.length; i++) {
		var answerButton = '<button onclick="answer('+ question.id +', ' + i + ')">'+question.options[i]+'</button>';
		$('#answers').append("<li>" + answerButton + "</li>");
	}
}

function answer(id, answerIndex) {
	console.log(id, answerIndex);
}

