//Javascript loads when html finishes loading

$(document).ready(function() {

	//Initial vars are set 

	var randomnumber = [];
	var numbersselected = [];
	var yournumber = 0;
	var computernumber = 0;
	var wins = 0;
	var losses = 0;

	//This is the first function that cycles through and initializes all the variables
	// and html tags to the same value as they were when page loaded

	function reset() {
		computernumber = 0;
		yournumber = 0;
		randomnumber.length = 0;
		numbersselected.length = 0;
		$(".crystalpictures").empty();
		// $(".message").html("");
		$(".wins").html("Wins: " + wins);
		$(".losses").html("Losses " + losses);

		//The computer chooses a random number between 19-120 and gets displayed in an html tag
		//along with the number counter when you click on the crystals

		computernumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
		$(".computernumber").html("<h4>Exact Rupees to get: </h4>" + computernumber);
		$(".yourscore").html("Your total score is: " + yournumber);

			//This function sets a random number between 1-12 to an array, if the number
			// picked already exists in another array, it will repick a number

			function tryagain (){
			randomnumber[i] = Math.floor(Math.random() * (12 - 1 + 1)) + 1;
			for (var k = 0; k < numbersselected.length; k++) {
			if (randomnumber[i] === numbersselected[k]) {
			tryagain();
				}
			}
		}
		//Because there will be 4 options, the for loop will cycle through 4 times
		// and setting an array to check if number was picked already
		for (var i = 0; i < 4; i++) {
			tryagain();
			numbersselected.push(randomnumber[i]);
	}
	//Function playgame gets called

	playgame() 

}

reset();
console.log(randomnumber);

	//Function for setting images and playing the game
	function playgame() {

	//Image sources get stored in an array
	var imagessources = ["assets/images/rupee1.png", "assets/images/rupee2.png", "assets/images/rupee3.png", "assets/images/rupee4.png"];
	
	//For loop creates images and uses the array with the images to place them in the html file,

	for (var i = 0; i < randomnumber.length; i++) {
		var imageCrystal = $("<img>");
		imageCrystal.addClass("crystal-image");
		imageCrystal.attr("src", imagessources[i]);

		//Assigns value that was randomly chosen to the current picture in loop
		imageCrystal.attr("data-crystalvalue", randomnumber[i]);

		//Displays the picture to the html along with its attributes
		$(".crystalpictures").append(imageCrystal);

		}	

	//When the image is clicked on, the data value get stored in a var and converted
	//from a string to in integer
	$(".crystal-image").on("click", function(){
	$(".message").html("");

	var crystalValue = ($(this).attr("data-crystalvalue"));
	crystalValue = parseInt(crystalValue);

	//The picture with the number attached gets added to the total value of your clicks
	// and displayed
	yournumber += crystalValue;
	$(".yourscore").html("Your total score is: " + yournumber);

	//These condition determine if you won or lost the game, if the condition is met
	// the game calls the reset function, initializing all variables again

	if (yournumber === computernumber) {
		wins++;
		$(".message").html("You Won!");
		reset();
		}

	if (yournumber > computernumber) {
		losses++;
		$(".message").html("You Lost!");
		reset();
		}
	});

}

});