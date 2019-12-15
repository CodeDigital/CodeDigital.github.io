var cnv
var w, h;

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-project');
}
  
function draw() {
}

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
}

function setWidthHeight(){
    h = window.innerHeight - 245;
    w = window.innerWidth-20;
}

function unmountScript(){
	console.log('Unmounted!');
}