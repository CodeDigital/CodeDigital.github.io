var input = document.getElementById('input');
input.onchange = function(){
  if(input.files[0]){
        playing = false;
      newSong(input.files[0]);
  }
};