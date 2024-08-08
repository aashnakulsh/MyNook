/*Add your JavaScript here*/

/*LA MANCHA - Playful, smart, clever and affectionate

NUBIAN - Known for being the most vocal of the goat breeds; Often one of the more sensitive breeds of goats

NIGERIAN DWARF - Curious and playful while often more independent in personality

ALPINE - Elegant and athletic

TOGGENBURG - Easy going, quiet and smart

PYGMY -Strong personalities and usually independent by nature
*/
var manchaSc = 0; //stores La Mancha score
var nubianSc = 0; //stores Nubian score
var dwarfSc = 0; //stores Nigerian Dwarf score
var alpineSc = 0; // stores Alpine score
var toggenSc = 0; //stores Toggenburg score
var pygmySc = 0;  //stores Pygmy score

var questionCount = 0 // stores the number of answers clicked on 

//stores the HTML elements using the DOM
var q1a1 = document.getElementById("q1a1");
var q1a2 = document.getElementById("q1a2");
var q1a3 = document.getElementById("q1a3");
var q1a4 = document.getElementById("q1a4");
var q1a5 = document.getElementById("q1a5");
var q1a6 = document.getElementById("q1a6");

var q2a1 = document.getElementById("q2a1");
var q2a2 = document.getElementById("q2a2");
var q2a3 = document.getElementById("q2a3");
var q2a4 = document.getElementById("q2a4");
var q2a5 = document.getElementById("q2a5");
var q2a6 = document.getElementById("q2a6");

var q3a1 = document.getElementById("q3a1");
var q3a2 = document.getElementById("q3a2");
var q3a3 = document.getElementById("q3a3");
var q3a4 = document.getElementById("q3a4");
var q3a5 = document.getElementById("q3a5");
var q3a6 = document.getElementById("q3a6");

var q4a1 = document.getElementById("q4a1");
var q4a2 = document.getElementById("q4a2");
var q4a3 = document.getElementById("q4a3");
var q4a4 = document.getElementById("q4a4");
var q4a5 = document.getElementById("q4a5");
var q4a6 = document.getElementById("q4a6");

var q5a1 = document.getElementById("q5a1");
var q5a2 = document.getElementById("q5a2");
var q5a3 = document.getElementById("q5a3");
var q5a4 = document.getElementById("q5a4");
var q5a5 = document.getElementById("q5a5");
var q5a6 = document.getElementById("q5a6");

var restartButton = document.getElementById("restartButton");

// Listen for click on answer button and call function of clicked
q1a1.addEventListener("click", mancha);
q1a2.addEventListener("click", nubian);
q1a3.addEventListener("click", dwarf);
q1a4.addEventListener("click", alpine);
q1a5.addEventListener("click", toggen);
q1a6.addEventListener("click", pygmy);

//pygmy toggen dwarf nubian la mancha alpine
q2a1.addEventListener("click", pygmy);
q2a2.addEventListener("click", toggen);
q2a3.addEventListener("click", dwarf);
q2a4.addEventListener("click", nubian);
q2a5.addEventListener("click", mancha);
q2a6.addEventListener("click", alpine);

//dwarf, pygmy, toggen, la mancha, nubian, alpine
q3a1.addEventListener("click", dwarf);
q3a2.addEventListener("click", pygmy);
q3a3.addEventListener("click", toggen);
q3a4.addEventListener("click", mancha);
q3a5.addEventListener("click", nubian);
q3a6.addEventListener("click", alpine);

//toggen dwarf alpine pygmy mancha nubian
q4a1.addEventListener("click", toggen);
q4a2.addEventListener("click", dwarf);
q4a3.addEventListener("click", alpine);
q4a4.addEventListener("click", pygmy);
q4a5.addEventListener("click", mancha);
q4a6.addEventListener("click", nubian);

//nubian alpine dwarf toggen pygmy mancha
q5a1.addEventListener("click", nubian);
q5a2.addEventListener("click", alpine);
q5a3.addEventListener("click", dwarf);
q5a4.addEventListener("click", toggen);
q5a5.addEventListener("click", pygmy);
q5a6.addEventListener("click", mancha);



restartButton.addEventListener("click", restart);

function restart() {
  manchaSc = 0;
  nubianSc = 0;
  dwarfSc = 0;
  alpineSc = 0;
  toggenSc = 0;
  pygmySc = 0;

  questionCount = 0;

  result1.innerHTML = "Scroll up and retake the test!";
  document.getElementById("imgresult").src="";
  document.getElementById("imgresult").style.opacity = "0%";
  document.getElementById("imgresult").style.height = "0px";
  result2.innerHTML = "";
  result3.innerHTML = "";

}

function updatedResult() {
  var scores = [manchaSc, nubianSc, dwarfSc, alpineSc, toggenSc, pygmySc];
  var maxIndex = 0;

  for (var i = 1; i < scores.length; i++) {
    if (scores[maxIndex] < scores[i]) {
      maxIndex = i;
    }
  }
  console.log(maxIndex);

  //la mancha
  if (maxIndex == 0) {
    console.log("La Mancha");
    result1.innerHTML = "Congrats! You are the <strong>LA MANCHA goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/mancha.jpg";
    result2.innerHTML = "These playful goats are known for their cleverness and affectionate personalities. They typically either have one of two small ear types: Gopher Ear or Elf Ear. Originating from Oregon, this is the only breed that has been developed in the US.";
    result3.innerHTML = "Although they have little ears, the La Mancha goats have big personalities and are sure to steal your heart!";

    //nubian
  } else if (maxIndex == 1) {
    console.log("Nubian");
    result1.innerHTML = "Congrats! You are the <strong>NUBIAN goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/Nubian.jpg";
    result2.innerHTML = "Known for being the most vocal of all the goat breeds, their trademark is long floppy ears and round roman noses. Despite being one of the larger breeds, they are often more sensitive and empathetic.";
    result3.innerHTML = "The Nubian goats are adventurous and will love to no end.";

    //dwarf
  } else if (maxIndex == 2) {
    console.log("Dwarf");
    result1.innerHTML = "Congrats! You are the <strong>NIGERIAN DWARF goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/dwarf.jpg";
    result2.innerHTML = "Known to be curious and playful, the Nigerian Dwarf goats have strong, forward-thinking minds that match beautifully with their independent personalities. They are the only goat breed that can have blue eyes, and their markings tend to be flashy/ a large variety of colors!";
    result3.innerHTML = "The Nigerian Dwarf has fortitude to face any challenge and the craftiness to overcome them.";

    //alpine
  } else if (maxIndex == 3) {
    console.log("Alpine");
    result1.innerHTML = "Congrats! You are the <strong>ALPINE goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/alpine.jpg";
    result2.innerHTML = "The alpine goat breed is typically elegant, athletic, and lean on the larger side of things. More so, unlike the other breeds, have a wide variety of colors and marking patterns, allowing them to blend into any crowd.";
    result3.innerHTML = "The Alpine goats are spontaneous and athletic. Nothing stops them!";

    //toggenburg
  } else if (maxIndex == 4) {
    console.log("Toggen");
    result1.innerHTML = "Congrats! You are the <strong>TOGGENBURG goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/toggenburg.jpg";
    result2.innerHTML = "Known for their distinct white markings with brown/mouse gray fur, the Toggenburg breed are easy going, quiet, and smart. Although often underestimated because of these traits, and their small size, the Toggenburg’s analytical prowess is a gift never to be undervalued.";
    result3.innerHTML = "";

    //pygmy
  } else if (maxIndex == 5) {
    console.log("Pygmy");
    result1.innerHTML = "Congrats! You are the <strong>PYGMY goat breed<strong>!";
    document.getElementById("imgresult").style.opacity = "100%";
    document.getElementById("imgresult").style.height = "500px";
    document.getElementById("imgresult").src="assets/results/pygmy.jpg";
    result2.innerHTML = "Known to be stocky and short, the Pygmy are nevertheless one of the most independent of the breeds. They have strong personalities and speak their mind.";
    result3.innerHTML = "The Pygmy will never let people talk down to them and are beasts in their own right.";
  }
}

function finished() {
  if (questionCount == 10) {
    console.log("The quiz is done!");

    updatedResult();
  }
}

function mancha() {
  manchaSc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Mancha score = " + manchaSc);
  finished();
}

function nubian() {
  nubianSc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Nubian score = " + nubianSc);
  finished();
}

function dwarf() {
  dwarfSc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Dwarf score = " + dwarfSc);
  finished();
}

function alpine() {
  alpineSc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Alpine score = " + alpineSc);
  finished();
}

function toggen() {
  toggenSc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Toggenburg score = " + toggenSc);
  finished();
}

function pygmy() {
  pygmySc += 1;
  questionCount += 1;

  console.log("questionCount = " + questionCount + "; Pygmy score = " + pygmySc);
  finished();
}
