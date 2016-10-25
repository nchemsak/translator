
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
        return Leet.getFrench();
        break;
    case "italian":
        return Leet.getItalian();
        break;
    case "german":
        return Leet.getGerman();
        break;
    default:
        console.log("getTranslation Error");
    }
  }
};

})();