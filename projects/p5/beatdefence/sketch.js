p5.disableFriendlyErrors = true;
var w = 900;
var h = 900;
var thick = 10;
var aSize = Math.PI/11;
var dir = 0;
var fps = 60;
var missiles = [];
var missileSpeed = 7;
var earlySpawn;
var amp,fft;
var playing = false;
var audio, backing, ready = false, loop = true;
var average = 0.1;
var amtAmp = 1;
var tempo;
var peakDetect;
var health = 5;
var maxH = 5;
var score = 0;
var earth, earthHit;
var ping, destroy;
var isHit = false;
var hitCountdown = 10;
var bpm;
var previousAngle = Math.PI;
var missileTimer = 0;
var shieldDist = 70;

function preload(){
  earth = loadImage('assets/earth3.png');
  earthHit = loadImage('assets/earthhit.png');
  //ping = loadSound('assets/missileping.wav');
  ping = loadSound('assets/beat.mp3');
  destroy = loadSound('assets/missiledest.wav');
  ping.playMode('sustain');
  destroy.playMode('sustain');
  ping.setVolume(0.4);
  destroy.setVolume(0.2);
}

function setup() {
  createCanvas(w,h);
  fft = new p5.FFT();
  amp = new p5.Amplitude();
  peakDetect = new p5.PeakDetect(20,20000,0.2,20);
}

function draw() {
  frameRate(fps);
  var backC = color(38,38,38,255);
  background(backC);
  //   if(playing){
  //   average = average * amtAmp;
  //   average = average + amp.getLevel();
  //   amtAmp = amtAmp + 1;
  //   average = average / amtAmp;
  // }

  //shieldDist = map(amp.getLevel(),0,1,55,75);

  fft.analyze();
  peakDetect.update(fft);
  if(playing){
    missileTimer = missileTimer + 1;
    //print(audio.currentTime());
    //if(audio.currentTime() == tempo[0]){
    //if(inTempo(audio.currentTime())){
    if (peakDetect.isDetected) {

      //tempo.pop();
      //var angles = fft.analyze();
      //var centroid = fft.getCentroid();
      //var nyquist = 22050;

      //var mean_freq_index = centroid/(nyquist/angles.length);
      //var startAngle = map(angles.indexOf(findMax(angles,mean_freq_index - 10,mean_freq_index + 10)),mean_freq_index - 10,mean_freq_index + 10,0,2*Math.PI);
      var randA = floor(getRandomArbitrary(0,1023.99999999));

      if(missileTimer >= fps/2){
        var startAngle = map(randA,0,1023,0,(2*Math.PI));
        //missileTimer = 0;
        //print("1")

      }else{
        var startAngle = map(randA,0,1023,previousAngle - (Math.PI / 6),previousAngle + (Math.PI / 6));
        //missileTimer = 0;
        //print("2");
      }
      missileTimer = 0;
      previousAngle = startAngle;

      //print(randA);
      //print(startAngle);
      // var newX = (w/2) + ((w/1.5) * cos(startAngle));
      // var newY = (h/2) - ((h/1.5) * sin(startAngle));
      var newX = (w/2) + ((w/2) * Math.cos(startAngle));
      var newY = (h/2) - ((h/2) * Math.sin(startAngle));
      //print(newX + "  -  " + newY);
      //var newSpeed = map(findMax(angles),0,255,1,10);
      //var newSpeed = map(findMax(angles,mean_freq_index - 10,mean_freq_index + 10),0,255,1,10);
      //var newSpeed = map(angles[randA],0,255,2,15);
      var newSpeed = missileSpeed;

      //print(findMax(angles));
      //print(newSpeed);
      var newDir = startAngle + Math.PI;
      var newMissile = new Missile(newSpeed,newX,newY,newDir);
      append(missiles,newMissile);
      //missileTimer = 0;
    }
  }
  // var angles = fft.analyze();
  // var sum;
  // for (var i = 0; i < angles.length; i++) {
  //   sum = sum+ angles[i];
  // }
  // var average = sum/angles.length;
  if(playing && loop){
    if(earlySpawn > 0){
      earlySpawn = earlySpawn - 1;
    }else{
      audio.play();
      loop = false;;
    }
  }

  if (audio && ready && !playing) {
    noTint();
    //playing = true;
    ready = false;
    //backing = audio;
    earlySpawn = ((w/2) - 60) / (missileSpeed);
    loop = true;
    fft.setInput(backing);
    //backing.setVolume(0);
    //backing.connect(fft);
    backing.disconnect();
    backing.play();
    playing = true;
    // audio.processPeaks(function(arr){
    //   tempo = arr;
    //   tempo = sort(tempo);
    //   //print(tempo);
    //   //earlySpawn = (w/2) / (missileSpeed * fps);
    //   // var sumDiff = 0;
    //   // var sum = 0;
    //   // for (var i = 0; i < tempo.length - 1; i++) {
    //   //   sumDiff = sumDiff + ((tempo[i+1] - tempo[i]) / 60);
    //   //   sum = sum + 1;
    //   // }
    //   // sumDiff = sumDiff / (sum);
    //   // sumDiff = sumDiff;
    //   // print(sumDiff);
    //   //bpm = 10 / (sumDiff)
    //   print(bpm);
    //   var fpp = fps / (bpm / fps);
    //   print(fpp);
    //   peakDetect = new p5.PeakDetect(20,20000,0.2,fpp);
    //   //audio.play();
    //   //print(tempo);
    //   //playing = true;
    // });
    print(bpm);
    var fpp = fps / ((4 * bpm) / fps);
    print(fpp);
    peakDetect = new p5.PeakDetect(20,20000,0.15,fpp);
    //playing = true;
  }

  //frameRate(100);
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


  strokeWeight(thick);
  //stroke(0,10,230,255);
  stroke(255);
  fill(0,50,255,255);
  //ellipse(w/2,h/2,80);
  if(isHit){
    image(earthHit,w/2 - 45,h/2 - 45,90,90);
  }else{
    image(earth,w/2 - 45,h/2 - 45,90,90);
  }
  //image(earth,w/2 - 45,h/2 - 45,90,90);


  dir = findAngle(mouseX,mouseY);

  //print(dir);

  //noFill();
  if(playing){
    //fill(0,50,255,255);
    noFill();
    //arc(w/2,h/2,140,140,(dir - aSize),(dir + aSize),CHORD);
    arc(w/2,h/2,2*shieldDist,2*shieldDist,(dir - aSize),(dir + aSize));
    noFill();
    //ellipse(w/2,h/2,w -30);
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
    }else if(missiles[i].cDist() >= shieldDist - (thick/2) && missiles[i].cDist() <= shieldDist + (thick/2)){
      //print("this far");
      var missileAngle = missiles[i].getDir();
      var angle1 = dir - aSize;
      var angle2 = dir + aSize;
      //print("angle 1 - " + angle1);
      //print("angle 2 - " + angle2);
      //print("missileAngle - " + missileAngle);
      if(angle1 <= (0)){
        missileAngle = missileAngle - (2*Math.PI);
      }else if(angle2 >= (2*Math.PI)){
        missileAngle = missileAngle + (2*Math.PI);
      }
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
    }else if(missiles[i].cDist() + missiles[i].len >= shieldDist + (thick/2) && missiles[i].cDist() <= shieldDist - (thick/2)){
      //print("this far");
      //var missileAngle = missiles[i].getDir();
      var missileAngle = findAngle(missiles[i].x, missiles[i].y);
      var angle1 = findAngle(mouseX,mouseY) - aSize;
      var angle2 = findAngle(mouseX,mouseY) + aSize;
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

  //point((w/2) - shieldDist,(h/2));
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
    rect(w - 220,50,map((audio.currentTime()/audio.duration()),0,0.99,0,200),20);
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
    //text(("TIME LEFT: " + floor(audio.duration() - audio.currentTime())),w-210,20,200,40);
    text(("TIME: " + floor(audio.currentTime())),w-210,20,200,40);
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
    //tint(255,0,0);
    hitCountdown = hitCountdown - 1;
    if(hitCountdown <= 0){
      hitCountdown = 10;
      //noTint();
      isHit = false;
    }
  }
}

function inTempo(curr){
  var isTrue = false;
  for (var i = 0; i < tempo.length; i++) {
    if((tempo[i] - earlySpawn <= ((curr + 0.05))) && ((tempo[i] - earlySpawn >= (curr - 0.05)))){
      //destroy.play();
      isTrue = true;
      tempo.splice(i,1);
      break;
    }
  }
  return isTrue;
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

  while(angle <= 0){
    angle = angle + (2*Math.PI);
  }
  while(angle >= (2*Math.PI)){
    angle = angle - (2*Math.PI);
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
    this.x = this.x + (this.speed * Math.cos(this.dir));
    this.y = this.y - (this.speed * Math.sin(this.dir));
  }

  this.show = function(){
    var showAngle = this.dir - Math.PI;
    var dX = this.x + (this.len * Math.cos(showAngle));
    var dY = this.y - (this.len * Math.sin(showAngle));
    stroke(255,50,0);
    strokeWeight(4);
    line(this.x,this.y,this.sX,this.sY);
    strokeWeight(8);
    stroke(255);
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
    var newX = (w/2) + (400 * Math.cos(startAngle));
    var newY = (h/2) - (400 * Math.sin(startAngle));
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

function getRandomArbitrary(min, max) {
  return Math.random() * (max - min) + min;
}
