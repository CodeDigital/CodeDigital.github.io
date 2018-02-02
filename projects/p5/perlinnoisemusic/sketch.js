var cols, rows;
var scl = 50;
var w = 2000;
var h = 1200;
var playing = false;
var audio, ready = false;
var flying = 0;
var c;
var terrain;
var waveAmp = 600;
var amplitude;
var timer = 100;
var countdown = false;
//var input = document.getElementById('input');

// input.onchange = function(e){
//   //var song = document.getElementById('sound');
//   song.src = URL.createObjectURL(this.files[0]);
//   audio = loadSound(song.src);
//   // not really needed in this exact case, but since it is really important in other cases,
//   // don't forget to revoke the blobURI when you don't need it
//   song.onend = function(e) {
//     URL.revokeObjectURL(this.src);
//   }
// }

// if (window.File && window.FileReader && window.FileList && window.Blob) {
//
//    //this is not completely neccesary, just a nice function I found to make the file size format friendlier
// 	//http://stackoverflow.com/questions/10420352/converting-file-size-in-bytes-to-human-readable
// 	function humanFileSize(bytes, si) {
// 	    var thresh = si ? 1000 : 1024;
// 	    if(bytes < thresh) return bytes + ' B';
// 	    var units = si ? ['kB','MB','GB','TB','PB','EB','ZB','YB'] : ['KiB','MiB','GiB','TiB','PiB','EiB','ZiB','YiB'];
// 	    var u = -1;
// 	    do {
// 	        bytes /= thresh;
// 	        ++u;
// 	    } while(bytes >= thresh);
// 	    return bytes.toFixed(1)+' '+units[u];
// 	}
//
//
//   // //this function is called when the input loads an image
// 	// function renderImage(file){
// 	// 	var reader = new FileReader();
// 	// 	reader.onload = function(event){
// 	// 		the_url = event.target.result
//   //     //of course using a template library like handlebars.js is a better solution than just inserting a string
// 	// 		$('#preview').html("<img src='"+the_url+"' />")
// 	// 		$('#name').html(file.name)
// 	// 		$('#size').html(humanFileSize(file.size, "MB"))
// 	// 		$('#type').html(file.type)
// 	// 	}
//   //
//   //   //when the file is read it triggers the onload event above.
// 	// 	reader.readAsDataURL(file);
// 	// }
//
//
//   //this function is called when the input loads a video
// 	function renderVideo(file){
// 		var reader = new FileReader();
// 		reader.onload = function(event){
// 			the_url = event.target.result
//       //of course using a template library like handlebars.js is a better solution than just inserting a string
//       //$('#data-vid').html("<video width='400' controls><source id='vid-source' src='"+the_url+"' type='video/mp4'></video>")
//        //$('#name-vid').html(file.name)
// 			//$('#size-vid').html(humanFileSize(file.size, "MB"))
// 			//$('#type-vid').html(file.type)
//
// 		}
//
//     //when the file is read it triggers the onload event above.
// 		reader.readAsDataURL(file);
// 	}
//
//
//
//   // //watch for change on the
// 	// $( "#the-photo-file-field" ).change(function() {
// 	// 	console.log("photo file has been chosen")
// 	// 	//grab the first image in the fileList
// 	// 	//in this example we are only loading one file.
// 	// 	console.log(this.files[0].size)
// 	// 	renderImage(this.files[0])
//   //
// 	// });
//
// 	$( "#audio-field" ).change(function() {
// 		console.log("video file has been chosen")
// 		//grab the first image in the fileList
// 		//in this example we are only loading one file.
// 		console.log(this.files[0].size)
//     sound = this.files[0]
//     preload();
//     setup();
// 		//renderVideo(this.files[0])
//
// 	});
//
// } else {
//
//   alert('The File APIs are not fully supported in this browser.');
//
// }


function preload(){
  //audio = loadSound(sound);
  //setup();
}

function setup() {
  c = createCanvas(1400, 700, WEBGL);
  cols = w / scl;
  rows = h/ scl;

  terrain = [];
  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
  }

  //c.drop(gotFile);
  //fft = new p5.FFT();
  amplitude = new p5.Amplitude();
  //amplitude.setInput(audio);

}

function itWorked(){
  print("too early")
  ready = true;
}

function draw() {
  //var spectrum = fft.analyze();
  //c.drop(gotFile);
  //if(playing){
  //frameRate(100);
  if (audio && ready && !playing) {
    playing = true;
    audio.play();
  }
  //audio.play()

  flying -= 0.04;
  var yoff = flying;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var level = amplitude.getLevel();
      var mount = map(level,0,1,0,waveAmp);
      //var mount = waveAmp * level;
      //print(amp.getLevel());
      //terrain[x][y] = map(noise(xoff, yoff), 0, 1, -1*waveAmp, waveAmp);
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -1*mount, mount);
      //terrain[x][y] = map(spectrum[x*y],0,255,-1*waveAmp,waveAmp);
      //terrain[x][y] = map(amplitude.getLevel(),0,1,-1*waveAmp,waveAmp);
      //print(level);
      xoff += 0.2;
    }
    yoff += 0.2;
  }


  background(50);
  translate(25,0);
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

      }
    }else{
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

            if(y<rows){
              vertex((x-1)*scl, (y+1)*scl, terrain[x-1][y+1]);
              vertex((x)*scl, (y)*scl, terrain[x][y]);
              vertex((x-1)*scl, (y)*scl, terrain[x-1][y]);
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
  // }else{
  //   background(255,0,200);
  //   fill(255);
  //   text("Drag and Drop a music file onto this box!",700,700);
  //
  // }
}

// function gotFile(file) {
//   print("got it");
//   // If it's an image file
//   if (file.type === 'audio') {
//     // Create an image DOM element but don't show it
//     var song = createAudio(file.data);
//     //audio = new p5.SoundFile(file);
//     audio = new p5.SoundFile(song);
//     playing = true;
//     audio.loop();
//     setup();
//     //song.play();
//     // Draw the image onto the canvas
//   } else {
//     println('Not an audio file!');
//   }
// }
