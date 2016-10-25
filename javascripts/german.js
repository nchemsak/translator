"use strict";

var Leet = (function(oldLeet){

  var germanLex = {
    Somebody: "Jemand ",
    besides: "neben ",
    Ben: "Ben ",
    please: "bitte ",
    Answer: "Beantworten ",
    the: "Sie die ",
    question: "Frage "
  };
//Jemand neben Ben bitte Beantworten Sie die Frage
oldLeet.getGerman = function(){
return germanLex;
}
    
return oldLeet;


})(Leet);

// Testing
//console.log("Return Object By Id", Leet.getTranslation("german"));