var input = document.getElementById('songinput');
input.onchange = function(){
  if(input.files[0]){
        playing = false;
      newSong(input.files[0]);
  }
};