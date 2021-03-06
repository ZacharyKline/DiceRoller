//Buttons for the page
const rollButton = document.querySelector("#rollButton");
const sideButton = document.querySelector("#sideButton");
const resetButton = document.querySelector("#resetButton");
const showRolls = document.querySelector("#showRolls");

//HTML Elements to track
const rollTimes = document.querySelector("#playerInput");
const resultSpot = document.querySelector("#resultSpot");
const rollsSpot = document.querySelector("#rollsSpot");
const playerInput = document.querySelector("#playerInput");
const sideInput = document.querySelector("#sideInput");
const sideResponseSpot = document.querySelector("#sideResponseSpot");
//Internal javascript number tracking
let playerIndex = 0;
let arrayIndex = 0;
let rollTotal = 0;
let diceSides = 6;
//Arrays
const rollArray = [];

sideButton.addEventListener("click", function () {
	if (sideInput.value !== 6) {
		diceSides = sideInput.value;
		console.log(diceSides);
		sideResponseSpot.innerHTML = "You chose " + diceSides + " sided dice";
	}
});

rollButton.addEventListener("click", function rollit() {
	let rollValue = playerInput.value;
		resultSpot.innerHTML = "The total of the rolls is " + rollTotal;
		while (playerIndex < rollValue) {
			let random = Math.floor(Math.random() * diceSides) + 1;
			console.log(random);
			rollArray.push(random);
			rollTotal += random;

			playerIndex += 1;
		}
		resultSpot.innerHTML = "The total of the rolls is " + rollTotal;
    rollButton.removeEventListener('click', rollit)
	console.log(rollArray);
});

showRolls.addEventListener("click", function () {
	rollsSpot.innerHTML = "";
	while (arrayIndex < rollArray.length) {
		let listItem = document.createElement("li");
		listItem.innerHTML =
			"Roll " + (arrayIndex + 1) + ": " + rollArray[arrayIndex] + " ";
		rollsSpot.appendChild(listItem);
		arrayIndex += 1;
	}
});

resetButton.addEventListener("click", function () {
	while (rollArray.length > 0) {
		rollArray.pop();
	}
	diceSides = 0;
	sideResponseSpot.innerHTML = "";
	rollsSpot.innerHTML = "";
	resultSpot.innerHTML = "";
	playerInput.value = "";
	sideInput.value = "";
	console.log(rollArray);
});
