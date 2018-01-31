var cols, rows;
var scl = 40;
var w = 2000;
var h = 1400;
var playing = false;
var audio, sound;
var flying = 0;
var c;
var terrain;
var waveAmp = 500;
var amplitude;

function preload(){
  sound = loadSound('assets/ballin.mp3');
}

function setup() {
  c = createCanvas(1400, 700, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  terrain = [];
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
  }

  c.drop(gotFile);
  //fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  //amplitude.setInput(audio);
  sound.play();

}

function draw() {
  //var spectrum = fft.analyze();
  //c.drop(gotFile);
  //if(playing){
  //frameRate(100);
  flying -= 0.02;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var level = amplitude.getLevel();
      var mount = map(level,0,1,-1*waveAmp,waveAmp);
      //var mount = waveAmp * level;
      //print(amp.getLevel());
      //terrain[x][y] = map(noise(xoff, yoff), 0, 1, -1*waveAmp, waveAmp);
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, 0, mount);
      //terrain[x][y] = map(spectrum[x*y],0,255,-1*waveAmp,waveAmp);
      //terrain[x][y] = map(amplitude.getLevel(),0,1,-1*waveAmp,waveAmp);
      //print(level);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(50);
  //translate(0, 50);
  translate(-(w/2), -(h/6),-350);
  rotateX(PI/3);
  //beginShape(LINES);
  beginShape(TRIANGLE_STRIP);

  for (var y = 0; y < rows-1; y++) {

    // beginShape(LINES);
    //beginShape(TRIANGLE_STRIP);
    //fill(255);
    noFill();
    stroke(255);
    //fill(random(0,255), random(0,255), random(0,255));

    if(y%2 == 0){
      for (var x = 0; x < cols; x++) {
        //fill(random(0,255));
        //beginShape(LINES);
        //beginShape(TRIANGLE_STRIP);
        //push();
        //translate(x*scl, y*scl, terrain[x][y]);
        //line(x*scl,y*scl,terrain[x][y],x*scl,(y+1)*scl,terrain[x][y+1]);
        vertex(x*scl, y*scl, terrain[x][y]);
        vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
        if(x>0) {
          //line(x*scl,y*scl,terrain[x][y],(x-1)*scl,y*scl,terrain[x-1][y]);
          vertex(x*scl, y*scl, terrain[x][y]);
          vertex((x-1)*scl, y*scl, terrain[x-1][y]);

          if(y<rows){
            vertex((x-1)*scl, (y+1)*scl, terrain[x-1][y+1]);
            vertex((x)*scl, (y+1)*scl, terrain[x][y+1]);
            //vertex((x-1)*scl, y*scl, terrain[x-1][y]);

          }
        }


        //pop();
        //endShape();

      }}else{
        for (var x = cols - 1; x >= 0; x--) {
          //beginShape(LINES);
          //beginShape(TRIANGLE_STRIP);
          //push();
          //translate(x*scl, y*scl, terrain[x][y]);
          //line(x*scl,y*scl,terrain[x][y],x*scl,(y+1)*scl,terrain[x][y+1]);
          vertex(x*scl, y*scl, terrain[x][y]);
          vertex(x*scl, (y+1)*scl, terrain[x][y+1]);
          if(x>0) {
            //line(x*scl,y*scl,terrain[x][y],(x-1)*scl,y*scl,terrain[x-1][y]);
            vertex(x*scl, y*scl, terrain[x][y]);
            vertex((x-1)*scl, y*scl, terrain[x-1][y]);

            if(y<rows){
              vertex((x-1)*scl, (y+1)*scl, terrain[x-1][y+1]);
              vertex((x)*scl, (y+1)*scl, terrain[x][y+1]);
              //vertex((x-1)*scl, y*scl, terrain[x-1][y]);

            }
          }
        }
      }
      //vertex(-1000,-1000,-1000);
      //endShape();

    }
    vertex(-10000,10000,0);
    endShape();
  //}else{
    //background(255,0,200);
    //text("Drag and Drop a music file onto this box!",700,700);

  //}
}

function gotFile(file) {
  print("got it");
  // If it's an image file
  if (file.type === 'audio') {
    // Create an image DOM element but don't show it
    var song = createAudio(file.data);
    //audio = new p5.SoundFile(file);
    playing = true;
    //song.play();
    // Draw the image onto the canvas
  } else {
    println('Not an audio file!');
  }
}
