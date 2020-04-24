/* eslint-disable */

p5.disableFriendlyErrors = true;
var cols, rows;
var scl = 50;
var w;
var h;
var playing = false;
var audio, ready = false;
var flying = 0;
var c;
var terrain = [];
var waveAmp = 600;
var amplitude;
var timer = 100;
var countdown = false;
var cnv;
var webGLon = true;
var songPath;
var changed = false;
var font;

function unmountScript(){
  console.log('cleared');
  if(audio){
    audio.stop();
    audio = null;
  }
  webGLon = false;
  remove();
}


function newSong(songPath){
  console.log('loading');
  if(audio){
    audio.stop();
  }
  audio = null;
  var getAudio = function(p){
    p.preload = function(){
      amplitude = new p5.Amplitude();
      amplitude.setInput(audio);
      audio = p.loadSound(songPath, function(){
        ready = true;
      });
    }
  }

  let myp5 = new p5(getAudio);
}

function preload() {
  font = loadFont('/_posts/projects/perlin-noise-music/assets/Montserrat-Black.otf');
}

function setup(){
  if(webGLon){
    h = sketchHeight();
    w = sketchWidth();
    cnv = createCanvas(w, h, WEBGL);
    cnv.parent('p5-canvas-perlin-noise-music');
	
	cols = floor(w / scl);
	rows = floor(h / scl);

	terrain = [];
	for (var x = 0; x < cols; x++) {
		terrain[x] = [];
	}
	//c.drop(gotFile);

  console.log(typeof loadSound);
  }


}

function itWorked(){
  print("too early")
  ready = true;
}
  
function draw() {



  if (audio && ready && !playing) {
	ready = false;
    playing = true;
    audio.setVolume(0.5);
    audio.play();
  }


  if(playing){
  flying -= 0.04;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var level = amplitude.getLevel();
      var mount = map(level,0,1,0,waveAmp);
	
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -1*mount, mount);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  var backC = color('#222222');
  background(backC);
  translate(25,0);
  translate(-(w/2), -(h/5),-350);
  rotateX(PI/3);
  beginShape(TRIANGLE_STRIP);

  for (var y = 0; y < rows-1; y++) {

    noFill();
    stroke(255);

    if(y%2 == 0){
      for (var x = 0; x < cols; x++) {
        vertex(x*scl, y*scl, (terrain[x])[y]);
        vertex(x*scl, (y+1)*scl, (terrain[x])[y+1]);
        if(x>0) {
          //vertex(x*scl, y*scl, terrain[x][y]);
          //vertex((x-1)*scl, y*scl, terrain[x-1][y]);

          if(y<rows){
            //vertex((x-1)*scl, (y+1)*scl, terrain[x-1][y+1]);
            //vertex((x)*scl, (y+1)*scl, terrain[x][y+1]);

          }
        }

      }
    }else{
        for (var x = cols - 1; x >= 0; x--) {
          vertex(x*scl, y*scl, terrain[x][y]);
          vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
          if(x>0) {
            vertex(x*scl, y*scl, terrain[x][y]);

            if(y<rows){
              vertex((x-1)*scl, (y+1)*scl, terrain[x-1][y+1]);
              vertex((x)*scl, (y)*scl, terrain[x][y]);
              vertex((x-1)*scl, (y)*scl, terrain[x-1][y]);

            }
          }
        }
      }

    }
    vertex(-10000,10000,0);
    endShape();
  }else{
    textFont(font);
    stroke(255)
    textSize(30);
    textAlign(CENTER);
    text("Upload a song to start",0,-20);
  }
}

function windowResized() {
  h = sketchHeight();
  w = sketchWidth();
  resizeCanvas(w,h);
}