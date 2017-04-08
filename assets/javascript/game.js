

var healthPoint = 0;
var attackPower = 0;
var counterAttackPower = 0;

// this array is HP of each character
  var healthPointArray = [10, 5, 3, 7];

// for(var i=0; i<healthPointArray.length; i++){
// 	// For each iteration, we will create an image
// 	var charImage = $("<img>");

// 	// First each character will be given the class ".boxImage".
//     // This will allow the CSS to take effect.
//     charImage.addClass("boxImage");
//     charImage.attr("data-charValue", healthPointArray[i]);

// }
var charImage1 = $("<img>");
charImage1.addClass("boxImage");
charImage1.attr("data-charValue", 10);
charImage1.attr("src", "assets/images/laura.jpg");

$("#character-1").append(charImage1);

// $("#character-1").attr("src", "../images/laura.jpg");
var charImage2 = $("<img>");
charImage2.addClass("boxImage");
charImage2.attr("data-charValue", 20);
charImage2.attr("src", "assets/images/bob.jpg");

$("#character-2").append(charImage2);