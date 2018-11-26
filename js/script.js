// *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */



// DOCUMENT READY FUNCTION BELOW


   


var userChoice;
var computerChoice ;
var winner ;
var randomNumber = 0;
$("#shoot").click(function(){
     var inputValue = $("userChoice").val();
    $("#userChoice").text(inputValue);
    $("#computerChoice").text($("randomNumber").val());
  
if (randomNumber > .66) {
   computerChoice = 'ninja'; 
      //$("#result").html("ninja");
 }
else if(randomNumber > .33) {
    
    $("#result").html ("bear");
}
else if (randomNumber >= 0  ){
    
    $("#result").html ("cowboy");
}
$("#result").html (inputValue);
    
});
 