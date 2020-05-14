const rollButton = document.querySelector("#rollButton");
const rollTimes = document.querySelector("#playerInput");
const resultSpot = document.querySelector("#resultSpot");
const showRolls = document.querySelector("#showRolls");
const rollsSpot = document.querySelector("#rollsSpot");
const playerInput = document.querySelector("#playerInput");
let playerIndex = 0;
let arrayIndex = 0
let rollTotal = 0;
const rollArray = [];

rollButton.addEventListener("click", function rollit() {
	while (playerIndex < playerInput.value) {
		let random = Math.floor(Math.random() * 6) + 1;
		console.log(random);
		rollArray.push(random);
		rollTotal += random;

		playerIndex += 1;
	}
	resultSpot.innerHTML = "The total of the rolls is " + rollTotal;
});

showRolls.addEventListener("click", function () {

    while (arrayIndex < rollArray.length) {
            let listItem = document.createElement('li')
            listItem.innerHTML = "Roll " + (arrayIndex + 1) + ": " + rollArray[arrayIndex] + " ";
            rollsSpot.appendChild(listItem)
			arrayIndex += 1;
		}
	
});
