let gamePattern = [];
let userClickedPattern = [];
let started = false;
let level = 0;
let colors = ['red', 'blue', 'green', 'yellow'];

function init() {
	gamePattern = [];
	userClickedPattern = [];
	started = false;
	level = 0;
}

function playColor(color) {
	//  play the corresponding sound
	let audio = new Audio('sounds/' + color + '.mp3');
	audio.play();

	//  add the css clas pressed to the button corresponding
	$('#' + color).addClass('pressed');
	setTimeout(function () {
		$('#' + color).removeClass('pressed');
	}, 100);
}

function nextSequence() {
	//  random choose a color
	let randomNumber = Math.floor(Math.random() * 4);
	let randomColor = colors[randomNumber];

	//  play the corresponding button
	playColor(randomColor);

	//  add the color to the gamePattern
	gamePattern.push(randomColor);

	//  increase the level
	level++;

	//  change the title according to level
	$('#level-title').text('Level ' + level);
}

function error() {
	//  add class game-over to the body
	//  play wrong song
	//  run init
	//  change the title to be "Game Over, Press any key to Restart"
}
