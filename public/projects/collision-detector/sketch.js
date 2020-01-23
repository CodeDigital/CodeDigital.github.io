var cnv
var w, h;
var circumference = 0;
var points = [];

function unmountScript(){
    remove();
  }

function setup(){
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-project');
    points.push(new Point(20,20));
    points.push(new Point(400,20));
    points.push(new Point(500,500));
    points.push(new Point(30,500));
    circumference = calcCircumference();
}
  
function draw() {
    background("#222222");
    textAlign(CENTER, CENTER);
    var tDist = 0;
    points.forEach(function(p,i){
        stroke(200);
        line(p.x,p.y,mouseX,mouseY);
        fill(255);
        ellipse(p.x,p.y,20);
        tDist += findDist(p.x,p.y,mouseX,mouseY);
    });

    text("Circumference: " + circumference, width/2, height-40)
    text("Sum of Lengths: " + tDist, width/2, height-20)
    
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

function calcCircumference(){
    var c = 0

    for (var i = 0 ; i < points.length - 1;i++){
        c += findDist(points[i].x,points[i].y,points[i+1].x,points[i+1].y);
    }

    c += findDist(points[points.length-1].x,points[points.length-1].y,points[0].x,points[0].y)

    return c;
}

function findDist(x1,y1,x2,y2){
    var vX = x2-x1;
    var vY = y2-y1;
    return Math.sqrt(vX*vX + vY*vY);
}

function Point(x,y){
    this.x = x;
    this.y = y;
}