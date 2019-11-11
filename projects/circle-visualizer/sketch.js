p5.disableFriendlyErrors = true;
var cnv;
var playing = false;
var audio, ready = false;
var amplitude;
var fft;
var sizeX = 15;
var minY = 1;
var maxY = 100;
var length = 32;
var angle = (Math.PI / (2 * length));
var name = "";
var fileType = "-";
var colorsr = [];
var colorsg = [];
var colorsb = [];
var digiProfile;
var mainC = [];
var ccss = [];
var ccsmin = 0.1;
var ccs = 0.2;
var ccsmax = 0.3;
var total = 75;
var w, h;

function endSound(){
  if(audio){
      audio.stop();
      audio = null;
  }
}

function preload() {
    digiProfile = loadImage('projects/circle-visualizer/assets/digi-circle.png');
}

function setup(){
    fft = new p5.FFT();
    amplitude = new p5.Amplitude();
    h = window.innerHeight - 245;
    w = window.innerWidth - 20;
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas');
    console.log(cnv);
}
 
function draw() {
    genColours();
    //frameRate(5);
    var backC = color('#222222');
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
      // var mainC = [
      //   getRandomInt(0, 255),
      //   getRandomInt(0, 255),
      //   getRandomInt(0, 255)
      // ];
      // colorsr = [];
      // colorsg = [];
      // colorsb = [];
  
      // //console.log(mainC);
  
      // var cVariab = 100;
  
      // for (var i = 0; i < length; i++) {
      //   //append(colorsr,getRandomInt(0,100));
      //   //append(colorsg,getRandomInt(0,100));
      //   append(colorsr, mainC[0] + map(noise(i), 0, 1, -cVariab, cVariab));
      //   append(colorsg, mainC[1] + map(noise(i), 0, 1, -cVariab, cVariab));
      //   //append(colorsb,getRandomInt(200,255));
      //   append(colorsb, int(mainC[2] + map(noise(i), 0, 1, -cVariab, cVariab)));
      //   //print(colorsr)
      // }
      // console.log(colorsb);
    }
  
    //noStroke();
    translate(w / 2, h / 2);
    push();
    //rotate(Math.PI - (2*angle));
    rotate(Math.PI);
    //beginShape();
    vertex(-1 * total * sin(0), -1 * total * cos(0));
    for (var i = 0; i < length; i++) {
      //var ints = colors[i];
      if (playing) {
        stroke(colorsr[i], colorsg[i], colorsb[i], 255);
        //fill(colorsr[i], colorsg[i], colorsb[i], 255);
      } else {
        stroke(255);
      }
      // if(i%2 == 0){
      //   stroke(255);
      // }else{
      //   stroke(255,0,0,255)
      // }
      //var angle = map(i,0,amps.length - 1,-(Math.PI / 2),(3*Math.PI / 2));
      if (amps[i] > 100) {
        var sizeY = map(amps[i], 100, 255, minY, maxY);
      } else if (amps[i] > 50) {
        var sizeY = map(amps[i], 50, 255, minY, maxY);
      } else {
        var sizeY = map(amps[i], 0, 255, minY, maxY);
      }
      rotate((2 * angle));
      total = map(amp, 0, 1, 170, 200);
      //noStroke();
      //triangle(-1 * (sizeX/2),total,(sizeX/2),total,0,(sizeY+total));
      //stroke(255);
      strokeWeight(sizeX);
      noFill();
      line(0, total, 0, (sizeY + total));
      //quadraticVertex(-1 * (total + 1.5 * sizeY) * sin((i * -2 * angle) - 2 *angle), -1 * (total + 1.5 * sizeY) * cos((i * -2 * angle) - 2 *angle), -1 * total * sin((i * -2 * angle) - 3 * angle), -1 * total * cos((i * -2 * angle) - 3 * angle));
      //bezier(-1 * (sizeX / 2), total, -1 * (sizeX / 2), (1.5 * sizeY + total), (sizeX / 2), (1.5 * sizeY + total), (sizeX / 2), total);
    }
  
    //vertex(0, 0);
    //endShape();
    pop();
  
    push();
    //rotate(Math.PI + (2*angle));
    for (var i = 0; i < length; i++) {
      if (playing) {
        stroke(colorsr[i], colorsg[i], colorsb[i], 255);
      } else {
        stroke(255);
      }
      // if(i%2 == 0){
      //   stroke(255);
      // }else{
      //   stroke(255,0,0,255)
      // }
      //var angle = map(i,0,amps.length - 1,-(Math.PI / 2),(3*Math.PI / 2));
      if (amps[i] > 100) {
        var sizeY = map(amps[i], 100, 255, minY, maxY);
      } else if (amps[i] > 50) {
        var sizeY = map(amps[i], 50, 255, minY, maxY);
      } else {
        var sizeY = map(amps[i], 0, 255, minY, maxY);
      }
      rotate((2 * angle));
      total = map(amp, 0, 1, 170, 200);
      //triangle(-1 * sizeX,total,sizeX,total,0,(sizeY+total));
      //stroke(255);
      noFill();
      strokeWeight(sizeX);
      line(0, total, 0, (sizeY + total));
      //quadraticVertex(-1 * (total + 1.5 * sizeY) * sin(PI + (i * -2 * angle) - 2 * angle), -1 * (total + 1.5 * sizeY) * cos(PI + (i * -2 * angle) - 2 *angle), -1 * total * sin(PI + (i * -2 * angle) - 3 * angle), -1 * total * cos(PI + (i * -2 * angle) - 3 * angle));
    }
  
    //endShape();
    //rotate(( -2*angle));
    //stroke(255);
    //line(0,total,0,(sizeY + total));
    pop();
    fill(255);
    textAlign(CENTER);
    //textSize(25);
    textSize(map(amp, 0, 1, 23, 30));
    //text(name,-total + 10,-30,2*(total-10),60);
    total = map(amp, 0, 1, 160, 190);
    push();
    rotate(map(amp, 0, 1, (-PI / 32), (PI / 7)));
    translate(-total, -total);
    //rotate(map(amp,0,1,0,(PI/8)));
    image(digiProfile, 0, 0, 2 * total, 2 * total);
    pop();
  }
  
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  function getRandom(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.random() * (max - min) + min; //The maximum is exclusive and the minimum is inclusive
  }
  
  // function drawText(font) {
  //   //fill('#ED225D');
  //   textFont(font);
  //   //text('p5*js', 10, 50);
  // }
  
  function genColours() {
    if(ccss.length == 0){
    ccss = [
      ccs,
      ccs,
      ccs
    ];
  }
  
    if (mainC.length == 0) {
      mainC = [
        getRandomInt(0, 255),
        getRandomInt(0, 255),
        getRandomInt(0, 255)
      ];
    } else {
      for (var i = 0; i < mainC.length; i++) {
        mainC[i] += ccss[i];
        if (mainC[i] > 255 & ccss[i] > 0) {
          ccss[i] = -1 * getRandom(ccsmin,ccsmax);
          mainC[i] += 2 * ccss[i];
        }
  
        if (mainC[i] < 0 & ccss[i] < 0) {
          ccss[i] = getRandom(ccsmin, ccsmax);
          mainC[i] += 2 * ccss[i];
        }
      }
    }
    colorsr = [];
    colorsg = [];
    colorsb = [];
  
    //console.log(ccss);
  
    var cVariab = 100;
  
    for (var i = 0; i < length; i++) {
      //append(colorsr,getRandomInt(0,100));
      //append(colorsg,getRandomInt(0,100));
      var addcol = [
        mainC[0] + map(noise(i), 0, 1, -cVariab, cVariab),
        mainC[1] + map(noise(i), 0, 1, -cVariab, cVariab),
        mainC[2] + map(noise(i), 0, 1, -cVariab, cVariab)
      ];
  
      for (var x = 0; x < addcol.length; x++) {
        if (addcol[x] > 255) {
          addcol[x] = 255;
        } else if (addcol[x] < 0) {
          addcol[x] = 0;
        }
      }
  
      append(colorsr, addcol[0]);
      append(colorsg, addcol[1]);
      //append(colorsb,getRandomInt(200,255));
      append(colorsb, addcol[2]);
      //print(colorsr)
    }
    //console.log(colorsb);
  }

  function newSong(songPath){
    console.log('loading');
    if(audio){
      audio.stop();
    }
    audio = null;
    try {
      audio = loadSound(songPath, function(){
        ready = true;
    });
    } catch (error) {
      console.error(error);
    }

  }

function windowResized() {
    let h = window.innerHeight - 290;
    let w = window.innerWidth-20;
    resizeCanvas(w,h);
}