var input = document.getElementById('input');
input.onchange = function(){
  if(input.files[0]){
        playing = false;
      newSong(input.files[0]);

      // console.log('loading');
      // if(audio){
      //   audio.stop();
      // }
      // audio = null;

      // songPath = input.files[0];

      // changed = true;

      // try {
      //   //audio = loadSound(songPath, function(){
      //     //ready = true;
      // //});
      // } catch (error) {
      //   console.error(error);
      // }
  }
};