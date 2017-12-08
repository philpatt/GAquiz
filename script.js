// document.getElementById("q2").style.display = "none";
var allQuestions = [
	{
		question: "1. There are no additional spacetime dimensions"}, 
		// choices: ["True", "False",], 
	{
		question: "2. The nature of dark energy is ultra cold"}, 
		// choices: ["True", "False",], 
	{
		question: "3. Protons are unstable"},
		// choices: ["True", "False",],
	{
		question: "4. The new theory of matter and light is needed at the highest energies"},
		// choices: ["True", "False",],
	{
		question: "5. With more energy water molecules move faster"},
		// choices: ["True", "False",],
		
	{
		question: "6. Tardigrades have lived on earth for 5 hundred million years"},
		// choices: ["True", "False",],
	{
		question: "7. It is possible to escape a black hole"}, 
		// choices: ["True", "False",], 
	{
		question: "8. The universe began in a tremendous burst of expansion"}, 
		// choices: ["True", "False",], 
	{
		question: "9. Neutrons are mostly abundantly present in the universe today"},
		// choices: ["True", "False",],
	{
		question: "10. Earth is flat"},
		// choices: ["True", "False",],

]; 

// console.log(allQuestions[0].question);
var correctSelect = ["tBtn", "fBtn"]
var turn = 0;
var falseScore = 0
var score = 0;
var ask = document.getElementById('q');
// var ask2 = document.getElementById('q2');
var tBtn = document.getElementById('t');
var fBtn = document.getElementById('f');

ask.innerText = allQuestions[0].question;


// var checkAnswer = function(){
// 	if(correctSelect[0] === 
// }


var addTrueEvent = tBtn.addEventListener('click',function(){
	turn += 1;
	if(turn === 1){
		score += 1;
		console.log("right");
	} else if(turn === 2){
		score += 1;
		console.log("right");
	} else if(turn === 5){
		score += 1;
		console.log("right");
	} else if(turn === 6){
		score += 1;
		console.log("right");
	// } else if(turn === 8){
	// 	score += 1;
	// 	console.log("right");
	} else if(turn === 9){
		score += 1;
		console.log("right");
	// } else if(turn === 10){
	// 	score += 1;
	// 	console.log("right");
	} else{
		console.log('false');
	};

	ask.innerText = allQuestions[turn].question;
	console.log(turn);
	console.log(falseScore + " is false score value");
	console.log(score + ' is true score value')
});

var addFalseEvent = fBtn.addEventListener('click',function(){
	turn += 1;
	if(turn === 3){
		falseScore += 1;
		console.log("right");
	} else if(turn === 4){
		falseScore += 1;
		console.log("right");
	} else if(turn === 7){
		falseScore += 1;
		console.log("right");
	} else if(turn === 8){
		falseScore += 1;
		console.log("right");
	} else if(turn === 10){
		falseScore += 1;
		console.log("right");
		ask.innerText = 'THIS IS YOUR SCORE: ' + (falseScore + score) * 10;
		fBtn.style.display = 'none';
		tBtn.style.display = 'none';
		console.log('overall score is '+ (falseScore + score) );
	} else{
		console.log('false');
	};
	ask.innerText = allQuestions[turn].question;
	console.log(turn);
	console.log(falseScore + " is false score value");
	console.log(score + ' is true score value')

	
	// if(turn = 10){
	// console.log('10th click');
	// document.getElementById('results').innerText = ('score is ' + score * 10);
	// tBtn.removeEventListener('click');
});


// remove event listener after last click
// if(turn >= 2){
// 	console.log('remove click');
// 	document.getElementById('results').innerText = score * 10
	// tBtn.removeEventListener('click');
// };


