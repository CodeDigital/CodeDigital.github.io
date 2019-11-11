p5.disableFriendlyErrors = true;

var cnv
var foo; // speech recognition object (will prompt for mic access)

function setup(){
 noCanvas();
  var lang = navigator.language || 'en-US';

  function showResult(){
	try{
	var test = document.createElement("p");
    var txt = test.innerHTML;
    //txt = foo.resultString + "<br>" + txt;
    txt = foo.resultString;
    test.innerHTML = txt;
    //createP(foo.resultString);
    console.log(foo.resultString); // log the result
	var canvas = document.getElementById("p5-canvas");
	canvas.prepend(test);
	}catch{
		
	};
  }

  foo = new p5.SpeechRec(lang,showResult);
	var continuous = true; // boolean to set whether the speech recognition engine will give results continuously (true) or just once (false = default). bind callback function to trigger when speech is recognized
	var interim = true;
	foo.start(continuous, interim); // start listening
}

function unmountScript(){
	console.log('unmoutned');
	foo = null;
}