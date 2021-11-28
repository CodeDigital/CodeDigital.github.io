var cnv
var w, h;
var textInput;
var alphabet = "abcdefghijklmnopqrstuvwxyz";
var punctuation = ".,;:?!";
var snippets = {};
var playlist = [];
const SPACE = "space";
const PUNCT = "punctuation";
const SNIPPET_TYPE = "x-snippets";
var effects = [];
var hums = [];

function unmountScript(){
    remove();
}

function preload(){
    for(var i = 0; i < alphabet.length; i++){
        var letter = alphabet[i];
        snippets[letter] = loadSound("/_posts/projects/ac-chatter/" + SNIPPET_TYPE + "/" + letter + ".mp3");
    }
    for(var i = 0; i < 3; i++){
        hums[i] = loadSound("/_posts/projects/ac-chatter/" + SNIPPET_TYPE + "/hum" + (i+1) + ".mp3")
    }
}

function setup(){
    setWidthHeight();
    // cnv = createCanvas(w, h);
    // cnv.parent('p5-canvas-ac-chatter');
    soundFormats('mp3');
    // alphabet.forEach(letter => {
    //     snippets[letter].play();
    // });
    // effects.push(new p5.Distortion(0.025));
    // effects.push(new p5.Reverb());
    // effects.forEach(e => {
    //     for(var i = 0; i < alphabet.length; i++){
    //         e.process(snippets[alphabet[i]]);
    //     }
    // });
}

function draw() {
    // console.log(getAudioContext().state);
}

function runTTS(){
    playlist = [];
    userStartAudio();
    var str = document.getElementById("input-ac-chatter").value.toLowerCase();
    console.log(str);
    console.log(getAudioContext().state);
    for(var i = 0; i < str.length; i++){
        var letter = str[i];
        console.log(letter);
        var playValue = {};
        playValue.value = letter;
        if(alphabet.includes(letter)){
            playValue.sound = snippets[letter];
            playlist.push(playValue);
        }else if(punctuation.includes(letter)){
            playValue.sound = PUNCT;
            playlist.push(playValue);
        }else if(letter == " "){
            playValue.sound = SPACE;
            playlist.push(playValue);
        }
    }
    document.getElementById("output-ac-chatter").innerText = "";
    noiseSeed((Math.random()) * 100);
    playSnippet(playlist);
}

function playSnippet(playlist, index = 0){
    var i = 0;
    var bufferTime = noise(index / 1000, i++) * 30 + 10;
    if(index >= playlist.length) return;
    if(playlist[index].sound == PUNCT){
        bufferTime += noise(index / 1000, i++) * 500;
    }else if(playlist[index].sound == SPACE){
        bufferTime += noise(index / 1000, i++) * 150;
    }else{
        playlist[index].sound.playMode("sustain");
        playlist[index].sound.play(0, 0.5 + 1 * noise(index/10, i++));

        let humType = Math.floor(3 * noise(index / 10, i++));
        console.log(humType);
        hums[humType].playMode("sustain");
        hums[humType].play(0, 0.75 + 0.5 * noise(index / 10, i++), 1, 0, bufferTime / 100);
    }
    document.getElementById("output-ac-chatter").innerText += playlist[index].value;
    setTimeout(() => {
        playSnippet(playlist, index + 1)
    }, bufferTime);
}

function windowResized() {
    setWidthHeight();
    // resizeCanvas(w,h);
}

function setWidthHeight(){
    h = sketchHeight();
    w = sketchWidth();
}

function unmountScript(){
	console.log('Unmounted!');
}

function mouseClicked(){
    userStartAudio();
}

document.getElementById("button-ac-chatter").onclick = runTTS;
document.getElementById("input-ac-chatter").value = 
    "The quick onyx goblin jumps, over the lazy dwarf!";