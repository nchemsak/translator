"use strict";

var outputString = "";

var spanish = document.getElementById("spanish");
var french = document.getElementById("french");
var german = document.getElementById("german");
var italian = document.getElementById("italian");
var canadian = document.getElementById("canadian");
var output = document.getElementById("output");
var inputElement = document.getElementById("input");

function pushPhrase(languageString) {
  outputString = inputElement.value;
  console.log("outputString:", outputString);
  var stringArray = outputString.split(" ");
  console.log("stringArray:", stringArray);

  if (spanish.selected) {
    var obj = Leet.getTranslation("spanish");

    var newString = outputString.replace(/Somebody/i, obj.Sombody).replace(/besides/i, obj.besides).replace(/Ben/i, obj.Ben).replace(/please/i, obj.please).replace(/answer/i, obj.Answer).replace(/the/i, obj.the).replace(/question/i, obj.question);

    output.innerHTML = newString;
    console.log("newString:", newString);

  } else if (french.selected){

    var obj = Leet.getTranslation("french");

    var newString = outputString.replace(/Somebody/i, obj.somebody).replace(/besides/i, obj.besides).replace(/Ben/i, obj.Ben).replace(/please/i, obj.please).replace(/answer/i, obj.answer).replace(/the/i, obj.the).replace(/question/i, obj.question);

    output.innerHTML = newString;
    console.log("newString:", newString);

  } else if (italian.selected) {

    var obj = Leet.getTranslation("italian");

    var newString = outputString.replace(/Somebody/i, obj.Sombody).replace(/besides/i, obj.besides).replace(/Ben/i, obj.Ben).replace(/please/i, obj.please).replace(/answer/i, obj.Answer).replace(/the/i, obj.the).replace(/question/i, obj.question);

    output.innerHTML = newString;
    console.log("newString:", newString);

  } else if (german.selected) {

    var obj = Leet.getTranslation("german");

    var newString = outputString.replace(/Somebody/i, obj.Somebody).replace(/besides/i, obj.besides).replace(/Ben/i, obj.Ben).replace(/please/i, obj.please).replace(/answer/i, obj.Answer).replace(/the/i, obj.the).replace(/question/i, obj.question);

    output.innerHTML = newString;
    console.log("newString:", newString);

  } else if (canadian.selected) {

    var obj = Leet.getTranslation("canadian");

    var newString = outputString.replace(/Somebody/i, obj.Somebody).replace(/besides/i, obj.besides).replace(/Ben/i, obj.Ben).replace(/please/i, obj.please).replace(/answer/i, obj.answer).replace(/the/i, obj.the).replace(/question/i, obj.question);

    output.innerHTML = newString;
    console.log("newString:", newString);

  } else {
    console.log("error");
  }
  }



// Event Listeners
document.getElementById("translate").addEventListener("click", pushPhrase);


