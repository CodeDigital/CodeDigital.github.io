var cnv

function setup(){
    let h = window.innerHeight - 330;
    let w = window.innerWidth-20;
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas');
}
  
function draw() {
}

function windowResized() {
    let h = window.innerHeight - 330;
    let w = window.innerWidth-20;
    resizeCanvas(w,h);
}