


//creating and initializing object characters
var hansoloChar = {
	imgSrc : "assets/images/hansolo.png",
	healthPoints: 130,
	name: "Han Solo",
	attackPower: 6
};
var mugChar = {
	imgSrc : "assets/images/Mugshot.png",
	healthPoints: 120,
	name: "Mug Shot",
	attackPower: 5
};
var chewChar = {
	imgSrc : "assets/images/chewbacca.png",
	healthPoints: 140,
	name: "Chew Bacca",
	attackPower: 20
};
var legoChar = {
	imgSrc : "assets/images/lego.png",
	healthPoints: 150,
	name: "Lego Char",
	attackPower: 10
};

//array which contains every object
var charArray = [hansoloChar, mugChar, chewChar, legoChar];
//variables
var selectedPlayerID;
var selectedEnemyID;
var counterAttackPower = 0;
var playerHp;
var container;
var healthP;
var isEnemySelected = false;

//this function creates and sets all initial values to the DOM
function charCreation(id, charArray){
	for(var i = 0; i < charArray.length; i++) {
		container = $("<div>");
		container.addClass("thecont");
		var img = $("<img>");
		img.addClass("boxImage");
		//setting all 3 attributes to the container
		container.attr({
			"data-attackPower": charArray[i].attackPower,
			"data-hpValue":  charArray[i].healthPoints,
			"data-name": charArray[i].name
		});
		//container.attr("id", i);
		img.attr("src", charArray[i].imgSrc);
		// p tag for name
		var nameP = $("<p>")
		nameP.addClass("paragraph");
		nameP.text(charArray[i].name);
		// setting health point attribute for each charachter
		healthP = $("<p>");
		healthP.addClass("paragraph health-p");
		healthP.text(charArray[i].healthPoints);
		container.append(nameP);
		container.append(img);
		container.append(healthP);
		// appending everything in the DOM
		$(id+(i+1)).append(container);
	}
}

charCreation("#character-", charArray);
var enimies = [];
var attackPower;
var youName;
var enimyName;
var enimyHp ;

// selecting character
$(".thecont").parent().on("click", function(){
	
    var id = $(this).attr("id");
    selectedPlayerID = id;

    var num = id.split("-")[1]-1;
    var selectedChar = charArray[num];
    attackPower = parseInt($(this).children().attr("data-attackPower"));
    playerHp = parseInt($(this).children().attr("data-hpValue"));
   	// finding which element is selected, then put other unselected into a new array called enemies
    index = charArray.indexOf(selectedChar);
    charArray.splice(index, 1);
   // assigning enemies into new array "enimies"
    for (var i = 0; i < charArray.length; i++) {
    	if(charArray[i] != selectedChar) {
    		enimies.push(charArray[i]);
    	}
    }
   	// replace all characters with selected character
    $('#map').replaceWith($(this));
    $(".invisibleBox").show();
    $(this).off("click");
    charCreation("#notselectedchar-", enimies);
    
});	


var counterEnimy=0;
// click enimies, this function is to set enemy attributes and define defender
function enemySelection(){
//$(".invisibleBox").on("click", function(){
	$("#attackCounter").html('');
	
	counterEnimy++;
    var id = $(this).attr("id");
    selectedEnemyID = id;
    
    var num = id.split("-")[1]-1;
 
    var oponent = enimies[num];
    enimyAttackPower = parseInt($(this).children().attr("data-attackPower"));
    enimyName = $(this).children().attr("data-name");
    enimyHp = parseInt($(this).children().attr("data-hpValue"));
    
   
    index = enimies.indexOf(oponent);
   
    var enimy = [];
    enimies.splice(index, 1);

    for (var i = 0; i < enimies.length; i++) {
    	if(enimies[i] != oponent) {
    		enimy.push(enimies[i]);
    	}
    }
    
    $('#defender').html($(this));
   // changing style of defender
    $(this).css({
      "background-color": "black",
      "border": "1.5px solid red",
      "color": "#fff"
    });
	
	isEnemySelected = true;
	$(".invisibleBox").off("click");
}	

var parAttack = $("<p>");
parAttack.attr("id", "parAttackStyle");
var newHP =0;
//this paragraph is created to show the defeats, attacks lose and wins
var defeat = $("<p>");
defeat.attr("id", "parAttackStyle");
//Attack Button

$("#attackButton").on("click", function(){
	
	if (isEnemySelected) {

		console.log("on attack button click"+attackPower);
		
		// calculate counter Attack power of player
		counterAttackPower = counterAttackPower + attackPower;
		// calculates health points of enimy
		enimyHp = enimyHp-counterAttackPower;
		playerHp = playerHp-enimyAttackPower;
		parAttack.text("You attacked "+enimyName+" By "+counterAttackPower+" damage! \n ");
		$("#attackCounter").html('');
		$("#attackCounter").append(parAttack);
		parAttack.append(enimyName+" Attacked you By "+enimyAttackPower+" damage!");
		
		$("#"+selectedPlayerID).find(".health-p").text(playerHp);
		$("#"+selectedEnemyID).find(".health-p").text(enimyHp);

		// here should check how much the player and enimy's health point are
		if(playerHp <= 0){
			
			defeat.text("You have been defeated.....Game Over!");

			$("#attackCounter").html(defeat);
			$("#resetButton").show();
			$(".invisibleBox").off("click");
			$(this).off("click");
		} 
		// if enemy health point is less than zero then the player defeated the 
		// enemy and should be able to choose a new defender
		if(enimyHp <=0){
			$("#defender").html('');
			$(".invisibleBox").on("click", enemySelection);
			isEnemySelected = false;
			if(enimyHp <=0 && playerHp >0){
				defeat.text("You have defeated "+enimyName+", you can choose to fight another enemy.");
				$("#attackCounter").html(defeat);
			}else{
				defeat.text("You have defeated "+enimyName+", You have also been defeated, Play Again.");
				$("#attackCounter").html(defeat);
				$(".invisibleBox").off("click");
			}
		}
	} else {
		defeat.text("Please select an enemy before attacking!");
		$("#attackCounter").html(defeat);
	}
	if(counterEnimy ==2 && enimyHp <= 0){
		var audio = new Audio('./assets/policepass.wav');
		audio.play();
	}
	//Game Over in case of defeating all enemies!
	if(counterEnimy == 3 && enimyHp <= 0){
		defeat.text("You Won.....Game Over!");
		$("#attackCounter").html(defeat);
		$("#resetButton").show();
		$(this).off("click");
	}

});//end of attack button on click
//calling the enemySelection function to enable player to select an enemy
$(".invisibleBox").on("click", enemySelection);

// reset button function
$("#resetButton").on("click", function(){
	location.reload();
});//end of reset button on click