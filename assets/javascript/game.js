

//var healthPoint = 0;
//var attackPower = 0;
//var counterAttackPower = 0;
//var name2 = "Bob Lee"

// this array is HP of each character
 // var healthPointArray = [10, 5, 3, 7];

// for(var i=0; i<healthPointArray.length; i++){
// 	// For each iteration, we will create an image
// 	var charImage = $("<img>");

// 	// First each character will be given the class ".boxImage".
//     // This will allow the CSS to take effect.
//     charImage.addClass("boxImage");
//     charImage.attr("data-charValue", healthPointArray[i]);

// }
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
var charArray = [hansoloChar, mugChar, chewChar, yodaChar];
for(var i = 0; i < charArray.length; i++) {
	//TODO handle p tag, and append everything to the contatiner and then the dom
	var container = $("<div>");
	var img = $("<img>");
	img.addClass("boxImage");
	img.attr("data-charValue", charArray[i].attackPower);
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
	$("#character-"+(i+1)).append(container);
}
	
$(".box").on("click", function(){


});	

// // on click function for character 2
// var parAttack = $("<p>");
// parAttack.addClass("paragraph");
// $("#character-2").on("click", function(){
// 	// why $(this) does not work here?
// 	var attackPower = ($(charImage2).attr("data-attackPower"));
// 	attackPower = parseInt(attackPower);
// 	console.log(attackPower);
// 	$("#attackCounter").append(parAttack);
// 	counterAttackPower = counterAttackPower + attackPower;
// 	parAttack.text("You attacked "+name2+" By "+attackPower+" damage!");
	


// });

