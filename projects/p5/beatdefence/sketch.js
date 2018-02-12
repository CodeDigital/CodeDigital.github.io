var w = 1000;
var h = 1000;
var thick = 10;
var aSize = Math.PI/3;
var dir = 0;
var fps = 144;
var missiles = [];
var amp,fft;
var playing = false;
var audio, ready = false;
var average = 0.1;
var amtAmp = 1;
var tempo;
var peakDetect;
var health = 40;
var maxH = 40;
var score = 0;
var img;
var ping, destroy;
var isHit = false;
var hitCountdown = 10;

function preload(){
  img = loadImage('assets/earth3.png');
  ping = loadSound('assets/missileping.wav');
  destroy = loadSound('assets/missiledest.wav');
  ping.playMode('sustain');
  destroy.playMode('sustain');
  ping.setVolume(0.3);
  destroy.setVolume(0.3);
}

function setup() {
  createCanvas(w,h);
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  peakDetect = new p5.PeakDetect(20,20000,0.35,5);
}

function draw() {
  //   if(playing){
  //   average = average * amtAmp;
  //   average = average + amp.getLevel();
  //   amtAmp = amtAmp + 1;
  //   average = average / amtAmp;
  // }

  fft.analyze();
  peakDetect.update(fft);
  if(playing){
    //if(audio.currentTime() == tempo[0]){
    if (peakDetect.isDetected) {
      //tempo.pop();
      var angles = fft.analyze();
      //var centroid = fft.getCentroid();
      //var nyquist = 22050;

      //var mean_freq_index = centroid/(nyquist/angles.length);
      //startAngle = map(angles.indexOf(findMax(angles,mean_freq_index - 10,mean_freq_index + 10)),mean_freq_index - 10,mean_freq_index + 10,0,2*Math.PI);
      var randA = floor(random(0,1023.99999999));
      var startAngle = map(randA,0,1023,0,(2*Math.PI));
      //print(randA);
      //print(startAngle);
      var newX = (w/2) + ((w/1.5) * cos(startAngle));
      var newY = (h/2) - ((h/1.5) * sin(startAngle));
      //print(newX + "  -  " + newY);
      //var newSpeed = map(findMax(angles),0,255,1,10);
      //var newSpeed = map(findMax(angles,mean_freq_index - 10,mean_freq_index + 10),0,255,1,10);
      //var newSpeed = map(angles[randA],0,255,2,15);
      var newSpeed = 5;

      //print(findMax(angles));
      //print(newSpeed);
      var newDir = startAngle + Math.PI;
      var newMissile = new Missile(newSpeed,newX,newY,newDir);
      append(missiles,newMissile);
    }
  }
  // var angles = fft.analyze();
  // var sum;
  // for (var i = 0; i < angles.length; i++) {
  //   sum = sum+ angles[i];
  // }
  // var average = sum/angles.length;

  if (audio && ready && !playing) {
    noTint();
    playing = true;
    ready = false;
    tempo = audio.processPeaks(function(){
      audio.play();
      //print(tempo);
      playing = true;
    });
    //  playing = true;
  }

  //frameRate(fps);
  frameRate(100);
  //print(amp.getLevel());
  // if(amp.getLevel() > average + 0.1){
  //
  //   var angles = fft.analyze();
  //   var centroid = fft.getCentroid();
  //   var nyquist = 22050;
  //
  //   var mean_freq_index = centroid/(nyquist/angles.length);
  //   startAngle = map(angles.indexOf(findMax(angles,mean_freq_index - 10,mean_freq_index + 10)),mean_freq_index - 10,mean_freq_index + 10,0,2*Math.PI);
  //   //var randA = floor(random(0,1023.99999999));
  //   //var startAngle = map(randA,0,1023,0,(2*Math.PI));
  //   //print(randA);
  //   //print(startAngle);
  //   var newX = (w/2) + ((w/2) * cos(startAngle));
  //   var newY = (h/2) - ((h/2) * sin(startAngle));
  //   //print(newX + "  -  " + newY);
  //   //var newSpeed = map(findMax(angles),0,255,1,10);
  //   var newSpeed = map(findMax(angles,mean_freq_index - 10,mean_freq_index + 10),0,255,1,10);
  //   //var newSpeed = map(angles[randA],0,255,1,5);
  //
  //   //print(findMax(angles));
  //   //print(newSpeed);
  //   var newDir = startAngle + Math.PI;
  //   var newMissile = new Missile(newSpeed,newX,newY,newDir);
  //   append(missiles,newMissile);
  //
  // }

  for (var i = 0; i < missiles.length; i++) {
    missiles[i].move();
  }

  var backC = color(30,30,30,255);
  background(backC);

  strokeWeight(thick);
  stroke(0,10,230,255);
  fill(0,50,255,255);
  //ellipse(w/2,h/2,80);
  image(img,w/2 - 45,h/2 - 45,90,90);


  dir = findAngle(mouseX,mouseY);

  //print(dir);

  //noFill();
  if(playing){
    fill(0,50,255,255);
    //  arc(w/2,h/2,140,140,(dir - aSize),(dir + aSize),CHORD);
    arc(w/2,h/2,140,140,(dir - aSize),(dir + aSize));

    //image(img,w/2 - 45,h/2 - 45,90,90);
  }


  //Checks if the rockets need to be deleted. Checks for health loss as well.
  for (var i = 0; i < missiles.length; i++) {
    //if distance from earth is in between thickness of arc.
    if(missiles[i].cDist() < 40 + (thick/2)){
      missiles.splice(i,1);
      isHit = true;
      health = health - 1;
      destroy.play();
    }else if(missiles[i].cDist() >= 70 - (thick/2) && missiles[i].cDist() <= 70 + (thick/2)){
      //print("this far");
      var missileAngle = missiles[i].getDir();
      var angle1 = dir - aSize;
      var angle2 = dir + aSize;
      print("angle 1 - " + angle1);
      print("angle 2 - " + angle2);
      print("missileAngle - " + missileAngle);
      if(missileAngle <= angle2 && missileAngle >= angle1){
        missiles.splice(i,1);
        //print("killed1");
        score = score + 1;
        ping.play();
      }else if(missileAngle >= angle2 && missileAngle <= angle1){
        missiles.splice(i,1);
        //print("killed2");
        score = score + 1;
        ping.play();
      }
    }else if(missiles[i].cDist() + missiles[i].len >= 70 + (thick/2) && missiles[i].cDist() <= 70 - (thick/2)){
      //print("this far");
      var missileAngle = missiles[i].getDir();
      var angle1 = dir - aSize;
      var angle2 = dir + aSize;
      if(missileAngle <= angle2 && missileAngle >= angle1){
        missiles.splice(i,1);
        //print("killed3");
        score = score + 1;
        ping.play();
      }else if(missileAngle >= angle2 && missileAngle <= angle1){
        missiles.splice(i,1);
        //print("killed4");
        score = score + 1;
        ping.play();
      }
    }

  }

  for (var i = 0; i < missiles.length; i++) {
    missiles[i].show();
  }

  //point((w/2) - 70,(h/2));
  //strokeWeight(1);
  stroke(33,33,33,255);
  strokeWeight(10);
  fill(255,0,0,255);
  rect(20,50,map((health/maxH),0,1,0,200),20);
  noFill();
  stroke(33,33,33,255);
  strokeWeight(10);
  rect(20,50,200,20);

  fill(0,255,0,255);
  if(playing){
    rect(w - 220,50,map((audio.currentTime()/audio.duration()),0,1,0,200),20);
  }else{
    rect(w - 220,50,200,20);
  }
  noFill();
  stroke(33,33,33,255);
  strokeWeight(10);
  rect(w - 220,50,200,20);

  fill(0,100,255,255);
  fill(255);
  noStroke();
  textSize(20);
  strokeWeight(2);
  stroke(0,0,255);

  textAlign(CENTER);
  text(("HEALTH: " + health),10,20,200,40);
  textSize(25);
  text(("SCORE: " + score),w/2-100,20,200,40)
  textSize(20);
  if(playing == true){
    text(("TIME LEFT: " + floor(audio.duration() - audio.currentTime())),w-210,20,200,40);
  }else{
    text(("TIME LEFT: NA"),w-210,20,200,40);
    textSize(40);
    text(("UPLOAD A SONG TO START!"),w/2 - 300,h/2 + 50,600,40);
  }
  if(health <= 0){
    missiles = [];
    tint(255,0,0);
    audio.stop();
    playing = false;
    textSize(40);
    text(("FINAL SCORE: " + score),w/2 - 300,h/2 - 90,600,40);
    text(("EARTH BLEW UP!"),w/2 - 300,h/2 - 140,600,40);
    textSize(20);
    //text(("Reload the page to TRY AGAIN."),w/2 - 300,h/2 + 90,600,40);

  }

  if (isHit) {
    tint(255,0,0);
    hitCountdown = hitCountdown - 1;
    if(hitCountdown <= 0){
      hitCountdown = 10;
      noTint();
      isHit = false;
    }
  }
}

function findAngle(x,y){
  var angle;
  var hor = x - (w/2);
  var ver = y - (h/2);
  angle = atan(ver/hor);
  if(x < (w/2)){
    angle = angle + Math.PI;
  }
  if(angle <= 0){
    angle = angle + (2*Math.PI);
  }
  //print(angle);
  return angle;
}

function unitCircleAngle(ang){
  //print("before" + ang);
  ang = tan(ang);
  ang = atan(ang);
  // while(true){
  //   if(ang < 0){
  //     ang = ang+ 2*Math.PI;
  //   }else if(ang >= 2*Math.PI){
  //     ang = ang - 2*Math.PI;
  //   }else{
  //     break;
  //     //return ang;
  //   }
  // }
  //print("after" + ang)
  return ang;
}

function Missile(mSpeed,mX,mY,mDir){
  this.sX = mX;
  this.sY = mY;
  this.x = mX;
  this.y = mY;
  this.dir = mDir;
  //print(this.dir);
  this.speed = mSpeed;
  this.len = 30;

  this.getDir = function(){
    var angle;
    var hor = this.x - (w/2);
    var ver = this.y - (h/2);
    angle = atan(ver/hor);
    if(this.x < (w/2)){
      angle = angle + Math.PI;
    }

    if(angle <= 0){
      angle = angle + (2*Math.PI);
    }

    //print(angle);
    return angle;
  }

  this.cDist = function(){
    var distX = this.x - (w/2);
    var distY = this.y - (h/2);
    var distance = sqrt(((distX * distX) + (distY * distY)));
    return distance;
  }

  this.move = function(){
    this.x = this.x + (this.speed * cos(this.dir));
    this.y = this.y - (this.speed * sin(this.dir));
  }

  this.show = function(){
    var showAngle = this.dir - Math.PI;
    var dX = this.x + (this.len * cos(showAngle));
    var dY = this.y - (this.len * sin(showAngle));
    stroke(255);
    strokeWeight(8);
    line(this.x,this.y,dX,dY);
    //line(this.x,this.y,this.sX,this.sY);
  }
}

function findMax(arr){
  var max = arr[0];
  for (var i = 1; i < arr.length; i++) {
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

function findMax(arr,start,stop){
  if(start < 0){
    start = 0;
  }
  if(stop > arr.length - 1){
    stop = arr.length - 1;
  }
  var max = 0;
  for (var i = start; i < stop; i++) {
    if(arr[i] > max){
      max = arr[i];
    }
  }
  return max;
}

function keyPressed(){
  if(keyCode === ENTER || key === " "){
    //var angles = fft.analyze();
    //print("Index of: " + angles.indexOf(findMax(angles)));
    var startAngle = -1 * findAngle(mouseX,mouseY);
    var newX = (w/2) + (400 * cos(startAngle));
    var newY = (h/2) - (400 * sin(startAngle));
    //print(newX + "  -  " + newY);
    var newSpeed = 10;
    var newDir = startAngle + Math.PI;
    var newMissile = new Missile(newSpeed,newX,newY,newDir);
    append(missiles,newMissile);
  }
  if(key === "R"){
    missiles = [];
    print("restarted")
    //tint(255,0,0);
    audio.stop();
    ready = true;
    playing = false;
    health = maxH;
    score = 0;
  }
}
