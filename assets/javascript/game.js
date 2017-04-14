
var selectedPlayerID;
var selectedEnemyID;
var counterAttackPower = 0;


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
//var attackPower;
var playerHp;
var charArray = [hansoloChar, mugChar, chewChar, legoChar];
var container;
var enimyCounterHp =0;
var healthP;
var isEnemySelected = false;

function charCreation(id, charArray){
	for(var i = 0; i < charArray.length; i++) {
		//TODO handle p tag, and append everything to the contatiner and then the dom
		container = $("<div>");
		container.addClass("thecont");
		var img = $("<img>");
		img.addClass("boxImage");
		console.log("attack power of first"+charArray[i].attackPower);
		//container.attr("data-attackPower", charArray[i].attackPower);
		//container.attr("data-hpValue",  charArray[i].healthPoints);
		container.attr({
			"data-attackPower": charArray[i].attackPower,
			"data-hpValue":  charArray[i].healthPoints,
			"data-name": charArray[i].name
		});
		container.attr("id", i);
		console.log(container.attr("data-attackPower"));
		//console.log(charArray[i].attackPower)
		img.attr("src", charArray[i].imgSrc);
		// p tag
		var nameP = $("<p>")

		nameP.addClass("paragraph");
		nameP.text(charArray[i].name);
		healthP = $("<p>");
		healthP.addClass("paragraph health-p");
		healthP.text(charArray[i].healthPoints);
		container.append(nameP);
		container.append(img);
		container.append(healthP);
		$(id+(i+1)).append(container);
	}
}

charCreation("#character-", charArray);
var enimies = [];
var attackPower;
var youName;
var enimyName;
var enimyHp ;

// when character is clicked add it to a variable called selectedChar
// then add the other characters to a array called otherChars
// then append them to the neccessary containers
$(".thecont").parent().on("click", function(){
	//console.log("the object"+ $(this).children());
    var id = $(this).attr("id");
    selectedPlayerID = id;
    //console.log("idobject"+id);
    var num = id.split("-")[1]-1;
   // console.log(num);
    var selectedChar = charArray[num];
    attackPower = parseInt($(this).children().attr("data-attackPower"));
    playerHp = parseInt($(this).children().attr("data-hpValue"));
    console.log("playerHp:" + playerHp);
   // youName = $(this).children().attr("data-name");
   // console.log("attackPower"+attackPower);
    index = charArray.indexOf(selectedChar);
    //console.log("selectedChar"+selectedChar);
    
    charArray.splice(index, 1);
   // console.log("charArray"+charArray);
    for (var i = 0; i < charArray.length; i++) {
    	if(charArray[i] != selectedChar) {
    		enimies.push(charArray[i]);
    	}
    }
    console.log(enimies);
    $('#map').replaceWith($(this));
    $(".invisibleBox").show();
    $(this).off("click");
    charCreation("#notselectedchar-", enimies);
    //console.log($(this));
	
	//healthPoints = parseInt($(this).children().attr("data-hpValue"));
	
});	


var counterEnimy=0;
// invisible click enimies
$(".invisibleBox").on("click", function(){
	$("#attackCounter").html('');
	console.log("the object enimy"+ $(this).children());
	counterEnimy++;
    var id = $(this).attr("id");
    selectedEnemyID = id;
    //console.log("idobject"+id);
    var num = id.split("-")[1]-1;
    //console.log(num);
    var oponent = enimies[num];
    enimyAttackPower = parseInt($(this).children().attr("data-attackPower"));
    enimyName = $(this).children().attr("data-name");
    enimyHp = parseInt($(this).children().attr("data-hpValue"));
    // console.log("attackPower enimy"+enimyAttackPower);
    console.log("hp enimy type"+typeof(enimyHp));
    index = enimies.indexOf(oponent);
    //console.log("selectedChar"+selectedChar);
    var enimy = [];
    enimies.splice(index, 1);
    //console.log("charArray"+enimies);
    for (var i = 0; i < enimies.length; i++) {
    	if(enimies[i] != oponent) {
    		enimy.push(enimies[i]);
    	}
    }
    console.log("enimies"+enimy);
    // change html with replace or append if necessary
    $('#defender').html($(this));
    //$(".defenderBox").show();
    $(this).css({
      "background-color": "black",
      "border": "1.5px solid red",
      "color": "#fff"
    });
   // $(this).off("click");
	
	isEnemySelected = true;

});	

// TODO: to count counterAttackPower and calculate healthpoint and change the property of object
var parAttack = $("<p>");
parAttack.attr("id", "parAttackStyle");
var newHP =0;
//this paragraph is created to show the defeats, attacks lose and wins
var defeat = $("<p>");
defeat.attr("id", "parAttackStyle");
//parAttack.addClass("paragraph");
//Attack Button
$("#attackButton").on("click", function(){
	
	if (isEnemySelected) {

		console.log("on attack button click"+attackPower);
		
		// calculate counter Attack power of player
		counterAttackPower = counterAttackPower + attackPower;
		// calculates health points of enimy
		enimyHp = enimyHp-counterAttackPower;
		console.log("enimy health point"+enimyHp);
		playerHp = playerHp-enimyAttackPower;
		parAttack.text("You attacked "+enimyName+" By "+counterAttackPower+" damage! \n ");
		$("#attackCounter").html('');
		$("#attackCounter").append(parAttack);
		//<br>"+enimyName+"\t Attacked you By "+enimyAttackPower+" damage!");
		parAttack.append(enimyName+" Attacked you By "+enimyAttackPower+" damage!");
		// set new attr bor player health points
		//var newhpofplayer = $("div#map").children(".boxImage").attr("data-hpValue", playerHp);
		//newhpofplayer.text(playerHp);
		//$("#"+).find(".health-p").text()
		$("#"+selectedPlayerID).find(".health-p").text(playerHp);
		$("#"+selectedEnemyID).find(".health-p").text(enimyHp);
		// $("div#map").children().text(healthP.text(playerHp));
		//console.log("data-hpValue of new player "+newhpofplayer);
		//$("#map").prop(healthPoints, playerHp);
		//console.log("health point attack player"+playerHp);

		//parAttack.text("health point of ob is"+healthPoints);



		// here should check how much the player and enimy's health point are
		if(playerHp <= 0){
			
			defeat.text("You have been defeated.....Game Over!");

			$("#attackCounter").html(defeat);
			$("#resetButton").show();
			$(".invisibleBox").off("click");
			$(this).off("click");
		} 

		if(enimyHp <=0){
			$("#defender").html('');
			isEnemySelected = false;
			if(enimyHp <=0 && playerHp >0){
				defeat.text("You have defeated "+enimyName+", you can choose to fight another enemy.");
				$("#attackCounter").html(defeat);
			}else{
				defeat.text("You have defeated "+enimyName+", You have also been defeated, Play Again.");
				$("#attackCounter").html(defeat);
			}
		}
	} else {
		defeat.text("Please select an enemy before attacking!");
		$("#attackCounter").html(defeat);
		//alert('Please select an enemy before attacking!');
	}
	if(counterEnimy ==2 && enimyHp <= 0){
		var audio = new Audio('./assets/policepass.wav');
		audio.play();
	}
	//Game Over!
	if(counterEnimy == 3 && enimyHp <= 0){
		console.log("game over "+ counterEnimy);
		defeat.text("You Won.....Game Over!");
		$("#attackCounter").html(defeat);
		$("#resetButton").show();
		$(this).off("click");
	}

});//end of attack button on click

// reset button function
$("#resetButton").on("click", function(){
	location.reload();
});//end of reset button on click