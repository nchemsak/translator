"use strict";

var Leet = (function(oldLeet) {
	var french = {
		somebody: "quelqu'un",
		besides: "d'ailleurs",
		Ben: "Ben",
		please: "s'il vous plaît",
		answer: "répondre",
		the: "la",
		question: "question"
	};

 oldLeet.getFrench = function () {
	return french;
};

return oldLeet;


})(Leet);

console.log(Leet.getTranslation("french"));