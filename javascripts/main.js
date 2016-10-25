"use strict";

var spanish = document.getElementById("spanish");
var french = document.getElementById("french");
var german = document.getElementById("german");
var italian = document.getElementById("italian");
var canadian = document.getElementById("canadian");
var output = document.getElementById("output");

function pushPhrase(languageString) {
  // var obj = Leet.getTranslation();

    // console.log("obj: ", obj );
  if (spanish.selected) {
    console.log("Spanish");
    var obj = Leet.getTranslation("spanish");
    output.innerHTML = `${obj.Sombody + obj.besides + obj.Ben + obj.please + obj.Answer + obj.the + obj.question}`
  } else if (french.selected){
    console.log("french");
    var obj2 = Leet.getTranslation("french");
    output.innerHTML = `${obj2.somebody + obj2.besides + obj2.Ben + obj2.please + obj2.Answer + obj2.the + obj2.question}`
  } else if (italian.selected) {
    console.log("italian");
    var obj3 = Leet.getTranslation("italian");
    output.innerHTML = `${obj3.Sombody + obj3.besides + obj3.Ben + obj3.please + obj3.Answer + obj3.the + obj3.question}`
  } else if (german.selected) {
    console.log("german");
    var obj4 = Leet.getTranslation("german");
    output.innerHTML = `${obj4.Somebody + obj4.besides + obj4.Ben + obj4.please + obj4.Answer + obj4.the + obj4.question}`
  } else if (canadian.selected) {
    console.log("canadian");
      var obj5 = Leet.getTranslation("canadian");
    output.innerHTML = `${obj5.Somebody + obj5.besides + obj5.Ben + obj5.please + obj5.answer + obj5.the + obj5.question}`
  } else {
    console.log("error");
  }
  }

// button
document.getElementById("translate").addEventListener("click", pushPhrase);



