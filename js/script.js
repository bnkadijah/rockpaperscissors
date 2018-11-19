// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW

$("#shoot").click(function(){
    var inputValue = $("userChoice").val();
    $("#userChoice").text(inputValue);
});
$("#shoot").click(function(){
    $("#computerChoice").text($("#").val());
    var randomNumber = 0;
});
var userChoice = "";
var computerChoice = "";
var winner = "";


var randomNumber = Math.random;
 if (randomNumber>.66) {
      $("#result").html("ninja");
 }
else if(randomNumber > .33) {
    $("#result").html ("bear");
}
