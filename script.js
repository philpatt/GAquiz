// document.getElementById("q2").style.display = "none";
var allQuestions = [
	{
		question: "Neil attended Harvard and while there he lettered in wrestling and was a member of the rowing team."}, 
	{
		question: "Neil received a master's degree in astrophysics from Columbia University in 1989 and his PhD in 1991."}, 
	{
		question: "Protons are unstable"},
	{
		question: "The new theory of matter and light is needed at the highest energies"},
	{
		question: "Neil's book, Death by Black Hole and Other Cosmic Quandaries, was a New York Times bestseller"},
	{
		question: "Neil once described his high school persona as 'a nerd who could kick your butt.' "},
	{
		question: "It is possible to escape a black hole"}, 
	{
		question: "The universe began in a tremendous burst of expansion"},  
	{
		question: "In 2006, the former planet,Pluto, and Neil, were considered 'frenemies.' "},
	{
		question: "Earth is flat"},

]; 

// console.log(allQuestions[0].question);
var correctSelect = ["tBtn", "fBtn"]
var turn = 0;
var falseScore = 0
var score = 0;
var ask = document.getElementById('q');

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
	} else if(turn === 9){
		score += 1;
		console.log("right");
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
		// document.body.style.backgroundImage = "url('img_tree.png')";
		// ask.style.color = 'white';
		// ask.innerText =(falseScore + score) * 10 +' % correct';
		// document.getElementsByClassName("wrapper").style = "none";
		document.querySelectorAll(".wrapper")[0].style.backgroundImage = "url('img/NEIL.jpg')";
        ask.innerText =(falseScore + score) * 10 +' % correct';
        document.getElementById("q").style.color = "#F7D86B ";

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


