

var counterAttackPower = 0;


var hansoloChar = {
	imgSrc : "assets/images/hansolo.png",
	healthPoints: 130,
	name: "Laura Dee",
	attackPower: 6
};
var mugChar = {
	imgSrc : "assets/images/Mugshot.png",
	healthPoints: 120,
	name: "Bob Lee",
	attackPower: 5
};
var chewChar = {
	imgSrc : "assets/images/chewbacca.png",
	healthPoints: 140,
	name: "Chew Bacca",
	attackPower: 20
};
var yodaChar = {
	imgSrc : "assets/images/yodasmall.jpg",
	healthPoints: 150,
	name: "Yoda Small",
	attackPower: 10
};
//var attackPower;
var hp;
var charArray = [hansoloChar, mugChar, chewChar, yodaChar];
var container;
function charCreation(id, charArray){
	for(var i = 0; i < charArray.length; i++) {
		//TODO handle p tag, and append everything to the contatiner and then the dom
		container = $("<div>");
		container.addClass("thecont");
		var img = $("<img>");
		img.addClass("boxImage");
		console.log("attack power of first"+charArray[i].attackPower);
		//container.attr("data-attackPower", charArray[i].attackPower);
		//container.attr("data-charValue",  charArray[i].healthPoints);
		container.attr({
			"data-attackPower": charArray[i].attackPower,
			"data-charValue":  charArray[i].healthPoints,
			"data-name": charArray[i].name
		});
		console.log(container.attr("data-attackPower"));
		//console.log(charArray[i].attackPower)
		img.attr("src", charArray[i].imgSrc);
		// p tag
		var nameP = $("<p>")
		nameP.addClass("paragraph");
		nameP.text(charArray[i].name);
		var healthP = $("<p>")
		healthP.addClass("paragraph");
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
// when character is clicked add it to a variable called selectedChar
// then add the other characters to a array called otherChars
// then append them to the neccessary containers
$(".thecont").parent().on("click", function(){
	console.log("the object"+ $(this).children());
    var id = $(this).attr("id");
    console.log("idobject"+id);
    var num = id.split("-")[1]-1;
    console.log(num);
    var selectedChar = charArray[num];
    attackPower = parseInt($(this).children().attr("data-attackPower"));
    console.log("attackPower"+attackPower);
    index = charArray.indexOf(selectedChar);
    //console.log("selectedChar"+selectedChar);
    
    charArray.splice(index, 1);
    console.log("charArray"+charArray);
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
	
	healthPoints = parseInt($(this).children().attr("data-charValue"));
	
});	



// invisible click enimies
$(".invisibleBox").on("click", function(){
	console.log("the object enimy"+ $(this).children());
    var id = $(this).attr("id");
    console.log("idobject"+id);
    var num = id.split("-")[1]-1;
    console.log(num);
    var oponent = enimies[num];
    attackPower = parseInt($(this).children().attr("data-attackPower"));
    youName = $(this).children().attr("data-name");
    console.log("attackPower enimy"+attackPower);
    console.log("name enimy"+youName);
    index = enimies.indexOf(oponent);
    //console.log("selectedChar"+selectedChar);
    var enimy = [];
    enimies.splice(index, 1);
    console.log("charArray"+enimies);
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
	
});	

// TODO: to count counterAttackPower and calculate healthpoint and change the property of object
var parAttack = $("<p>");
var newHP =0;
//parAttack.addClass("paragraph");
//Attack Button
$("#attackButton").on("click", function(){
		
		console.log("on attack button click"+attackPower);
		$("#attackCounter").append(parAttack);
		counterAttackPower = counterAttackPower + attackPower;
		parAttack.text("You attacked "+2+" By "+attackPower+" damage!");
		$("#map").prop(healthPoints, newHP);
		//parAttack.text("health point of ob is"+healthPoints);

});