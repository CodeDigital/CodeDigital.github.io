p5.disableFriendlyErrors = true;

var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)

function preload(){

}

function setup() {
  noCanvas();
foo.onResult = showResult; // bind callback function to trigger when speech is recognized
foo.start(); // start listening
}

function draw() {

}

function showResult()
{
  print(foo.resultString); // log the result
}
