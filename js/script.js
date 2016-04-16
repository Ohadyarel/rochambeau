$(document).ready(function(){
	$(".click-me").click(function(e){
		e.preventDefault();
		$(".shadow").css('display', 'block');
		$(".modal").css('display', 'block');
		var userChoice = $(this).attr("id");
		showUser(userChoice);
		picker();
		console.log(userChoice, computerChoice);
		gamePlay(userChoice,computerChoice);
	})

	$(".shadow").click(function() {
		$(".shadow").css('display', 'none');
		$(".modal").css('display', 'none');
		$("#win-count").text(wins);
		$("#lose-count").text(loses);
		$("#user-weapon").removeClass();
		$("#computer-weapon").removeClass();
		computerChoice = 0;
		userChoice = 0;
	})

	$("#exit").click(function() {
		$(".shadow").css('display', 'none');
		$(".modal").css('display', 'none');
		$("#win-count").text(wins);
		$("#lose-count").text(loses);
		$("#user-weapon").removeClass();
		$("#computer-weapon").removeClass();
		computerChoice = 0;
		userChoice = 0;
	})

	var computerChoice = 0;
	var wins = 0;
	var loses = 0;

	function showUser(user) {
		if (user == "scissors") {
			$("#user-weapon").addClass("fa fa-hand-scissors-o fa-5x");
		} else if (user == "rock") {
			$("#user-weapon").addClass("fa fa-hand-rock-o fa-5x");
		} else  {
			$("#user-weapon").addClass("fa fa-hand-paper-o fa-5x");
		}
	}

	function picker(){
		var random = Math.floor(Math.random()*3);
		if (random == 0) {
			computerChoice = "scissors";
			$("#computer-weapon").addClass("fa fa-hand-scissors-o fa-5x");
		} else if (random == 1) {
			computerChoice = "rock";
			$("#computer-weapon").addClass("fa fa-hand-rock-o fa-5x");
		} else {
			computerChoice = "paper";
			$("#computer-weapon").addClass("fa fa-hand-paper-o fa-5x");
		}
	};

	function gamePlay(user,computer) {
		if (user == computer) {
			$("#result").text("It's a Draw!");
		} else if (user == "rock") {
			if (computer == "scissors") {
				$("#result").text("You win!");
				wins += 1;
			} else if (computer == "paper") {
				$("#result").text("Computer wins!");
				loses += 1;
			}
		} else if (user == "scissors") {
			if (computer == "paper") {
				$("#result").text("You win!");
				wins += 1;
			} else if (computer == "rock") {
				$("#result").text("Computer wins!");
				loses += 1;
			}
		} else if (user == "paper") {
			if (computer == "rock") {
				$("#result").text("You win!");
				wins += 1;
			} else if (computer == "scissors") {
				$("#result").text("Computer wins!");
				loses += 1;
			}
		}
	}

});