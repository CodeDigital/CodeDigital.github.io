p5.disableFriendlyErrors = true;

var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)

function preload(){

}

function setup() {
  noCanvas();
  var spoken = new createP('Start Speaking?',false);
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening
}

function draw() {

}

function showResult()
{
  spoken.html(foo.resultString);
  print(foo.resultString); // log the result
}
