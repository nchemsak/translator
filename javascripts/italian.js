"use strict";

var Leet = (function(oldLeet) {

  var italianLex = {
    Sombody: "Qualcuno ",
    besides: "oltre ",
    Ben: "Ben ",
    please: "si prega ",
    Answer: "di rispondere ",
    the: "alla ",
    question: "domanda"
  };

oldLeet.getItalian = function() {
  return italianLex;
}

return oldLeet;

})(Leet);