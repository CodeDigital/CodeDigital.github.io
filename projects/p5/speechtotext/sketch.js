p5.disableFriendlyErrors = true;

var foo = new p5.SpeechRec(); // speech recognition object (will prompt for mic access)

function preload(){

}

function setup() {
  noCanvas();
foo.onResult = showResult;
foo.continuous = true; // boolean to set whether the speech recognition engine will give results continuously (true) or just once (false = default). bind callback function to trigger when speech is recognized
foo.start(); // start listening
}

function draw() {

}

function showResult()
{
  var test = document.getElementById("stt");
  test.insertBefor(foo.resultString);
  print(foo.resultString); // log the result
}
