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
    output.innerHTML = `${obj.Sombody + obj.besides + obj.Ben + obj.please + obj.answer}`
  } else if (french.selected){
    console.log("French");
    output.innerHTML = Leet.getTranslation("french");
  } else if (italian.selected) {
    console.log("Italian");
  } else if (german.selected) {
    console.log("German");
  } else if (canadian.selected) {
    console.log("Canadian");
  } else {
    console.log("error");
  }
  }

// button
document.getElementById("translate").addEventListener("click", pushPhrase);



