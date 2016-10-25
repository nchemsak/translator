"use strict";

var Leet = (function(){

  var spanish = {
    Sombody: "Alguien",
    besides: "además de",
    Ben: "Ben",
    please: "por favor",
    Answer: "responde",
    the: "a la",
    question: "pregunta"
  };

return {
  getTranslation: function(id_name) {
    switch(id_name) {
    case "spanish":
        return spanish;
        break;
    case "french":
        return french;
        break;
    case "italian":
        return italian;
        break;
    case "german":
        return german;
        break;
    default:
        console.log("getTranslation Error");
    }
  }
};

})();

// Testing
console.log("Return Object By Id", Leet.getTranslation("spanish"));