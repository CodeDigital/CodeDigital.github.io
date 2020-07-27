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
    background(22);

}

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
}

function setWidthHeight(){
    h = sketchHeight();
    w = sketchWidth();
}

function unmountScript(){
	console.log('Unmounted!');
}