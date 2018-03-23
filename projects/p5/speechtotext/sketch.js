p5.disableFriendlyErrors = true;

var foo; // speech recognition object (will prompt for mic access)

function preload(){

}

function setup() {
  noCanvas();
  var lang = navigator.language || 'en-US';
  foo = new p5.SpeechRec(lang,showResult);
foo.continuous = true; // boolean to set whether the speech recognition engine will give results continuously (true) or just once (false = default). bind callback function to trigger when speech is recognized
foo.start(); // start listening
}

function draw() {

}

function showResult()
{
  var test = document.getElementById("stt");
  var txt = test.innerHTML;
  txt = txt + "<br>" + foo.resultString;
  print(foo.resultString); // log the result
}
