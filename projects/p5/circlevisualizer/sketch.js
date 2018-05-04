
p5.disableFriendlyErrors = true;
var w = 1400;
var h = 700;
var playing = false;
var audio, ready = false;
var amplitude;
var fft;
var sizeX = 15;
var minY = 1;
var maxY = 150;
var length = 32;
var angle = (Math.PI / (2* length));
var name = "";
var fileType = "-";
var colorsr = [];
var colorsg = [];
var colorsb = [];

function preload(){
  //audio = loadSound(sound);
  //setup();
  //loadFont('assets/open24.otf', drawText(font));
}

function setup() {
  fft = new p5.FFT();
  //c.drop(gotFile);
  //fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  //amplitude.setInput(audio);
  createCanvas(w,h);

}

function draw() {
  //frameRate(5);
  var backC = color(38,38,38,255);
  background(backC);
  var amps = fft.analyze(length);
  var amp = amplitude.getLevel();
  //angle = (Math.PI / (amps.length));
  //print(angle);
  if (audio && ready && !playing) {
    ready = false;
    playing = true;
    audio.play();
    audio.setVolume(0.2);
    for (var i = 0; i < length; i++) {
      append(colorsr,getRandomInt(0,100));
      append(colorsg,getRandomInt(0,100));
      append(colorsb,getRandomInt(200,255));
      //print(colorsr)
    }
  }

  //noStroke();
  translate(w/2,h/2);
  push()
  //rotate(Math.PI - (2*angle));
  rotate(Math.PI);
  for(var i = 0;i < length;i++){
    //var ints = colors[i];
    if(playing){
      stroke(colorsr[i],colorsg[i],colorsb[i],255);
    }else{
      stroke(255);
    }
    // if(i%2 == 0){
    //   stroke(255);
    // }else{
    //   stroke(255,0,0,255)
    // }
    //var angle = map(i,0,amps.length - 1,-(Math.PI / 2),(3*Math.PI / 2));
    if(amps[i] > 100){
      var sizeY = map(amps[i],100,255,minY,maxY);
    }else if(amps[i] > 50){
      var sizeY = map(amps[i],50,255,minY,maxY);
    }else{
      var sizeY = map(amps[i],0,255,minY,maxY);
    }
    rotate(( 2*angle));
    total = map(amp,0,1,170,200);
    //triangle(-1 * sizeX,total,sizeX,total,0,(sizeY+total));
    //stroke(255);
    strokeWeight(sizeX);
    line(0,total,0,(sizeY + total));
  }
  pop();
  push();
  //rotate(Math.PI + (2*angle));
  for(var i = 0;i < length;i++){
    if(playing){
      stroke(colorsr[i],colorsg[i],colorsb[i],255);
    }else{
      stroke(255);
    }
    // if(i%2 == 0){
    //   stroke(255);
    // }else{
    //   stroke(255,0,0,255)
    // }
    //var angle = map(i,0,amps.length - 1,-(Math.PI / 2),(3*Math.PI / 2));
    if(amps[i] > 100){
      var sizeY = map(amps[i],100,255,minY,maxY);
    }else if(amps[i] > 50){
      var sizeY = map(amps[i],50,255,minY,maxY);
    }else{
      var sizeY = map(amps[i],0,255,minY,maxY);
    }
    rotate(( 2*angle));
    total = map(amp,0,1,170,200);
    //triangle(-1 * sizeX,total,sizeX,total,0,(sizeY+total));
    //stroke(255);
    strokeWeight(sizeX);
    line(0,total,0,(sizeY + total));
  }
  //rotate(( -2*angle));
  //stroke(255);
  //line(0,total,0,(sizeY + total));
  pop();
  fill(255);
  textAlign(CENTER);
  //textSize(25);
  textSize(map(amp,0,1,23,30));
  text(name,-total + 10,-30,2*(total-10),60)
}

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
}

// function drawText(font) {
//   //fill('#ED225D');
//   textFont(font);
//   //text('p5*js', 10, 50);
// }
