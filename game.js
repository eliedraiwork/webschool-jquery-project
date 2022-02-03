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

function setTitle(text) {
	$('#level-title').text(text);
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
	setTitle('Level ' + level);
}

function error() {
	//  add class game-over to the body
	$('body').addClass('game-over');
	setTimeout(() => {
		$('body').removeClass('game-over');
	}, 100);

	//  play wrong song
	new Audio('sounds/wrong.mp3').play();

	//  run init
	init();

	//  change the title to be "Game Over, Press any key to Restart"
	setTitle('Game Over, Press any key to Restart');
}

function checkAnswer(currentLevel) {
	if (userClickedPattern[currentLevel] === gamePattern[currentLevel]) {
		if (userClickedPattern.length === gamePattern.length) {
			userClickedPattern = [];
			setTimeout(function () {
				nextSequence();
			}, 1000);
		}
	} else {
		error();
	}
}

$(document).keypress(function () {
	if (started === false) {
		started = true;
		level = 0;
		setTitle('Level ' + level);
		nextSequence();
	}
});

$('.btn').click(function (event) {
	const color = event.target.id;
	userClickedPattern.push(color);
	playColor(color);
	checkAnswer(userClickedPattern.length - 1);
});
