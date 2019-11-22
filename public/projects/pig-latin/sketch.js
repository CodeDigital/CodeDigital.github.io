p5.disableFriendlyErrors = true;
var vowels = ['a','e','i','o','u'];
var en,pl;

function unmountScript(){
  console.log('cleared');
  remove();
}

function setup(){
  enName = createP("English");
  en = createInput('Enter the English here.');
  space1 = createP("<br>");
  space2 = createP("<hr>");
  space3 = createP("<br>");

  //pl = createInput('Enterway ethay Igpay Atinlay erehay.');
  plName = createP("Pig Latin")
  pl = createP('Resulting Pig Latin Text...');

  en.size(1000, 70);
  pl.size(1000, 70);

  en.style('width','90%');
  pl.style('width','90%');
  pl.style('height',"100%");

  en.style('font-size','30px');
  //en.style('margin-left','auto');
  //en.style('margin-right','auto');
  en.style('color','#ff66cc');
  en.style('background-color','#151719');
  en.style('-moz-box-shadow','inset 3px 3px 5px 6px black');
  en.style('-webkit-box-shadow','inset 3px 3px 5px 6px black');
  en.style('box-shadow','inset 3px 3px 5px 6px black');
  en.style('border','none');
  en.style('padding','15px 10px');
  en.style('box-sizing','border-box');

  enName.style('color','#ff66cc');
  enName.style('font-size','30px');

  plName.style('color','#ff66cc');
  plName.style('font-size','30px');

  //space2.style();
  space2.size(1200,2);
  space2.style('margin-left','auto');
  space2.style('margin-right','auto');

  // space3.size(1400,2);
   //space3.style('margin-left','auto');
  // space3.style('margin-right','auto');

  pl.style('font-size','30px');
  pl.style('color','#ff66cc');
  pl.style('background-color','#151719');
  pl.style('margin-left','auto');
  pl.style('margin-right','auto');
  pl.style('text-align','left');
  pl.style('padding','15px 10px');
  pl.style('box-sizing','border-box');


  //en.style('align-items','flex-start');
  //pl.style('align-items','flex-start');

  //pl.input(plen);
  en.input(enpl);
	enName.parent('#p5-canvas');
    en.parent('#p5-canvas');
	space1.parent('#p5-canvas');
	space2.parent('#p5-canvas');
	space3.parent('#p5-canvas');
	plName.parent('#p5-canvas');
    pl.parent('#p5-canvas');
    noCanvas();

}
  
function enpl() {
  var plText = "";
  var enText = this.value().toLowerCase();
  var enWords = [];
  var word = "";
  for (var i = 0; i < enText.length; i++) {
    if(enText[i] === ' '){
      if(word !== ""){
        append(enWords,word);
      }
      word = "";
    }else if (i === (enText.length - 1)) {
      word = word + enText[i];
      if(word !== ""){
        append(enWords,word);
      }
    }else{
      word = word + enText[i];
    }
  }

  for (var i = 0; i < enWords.length; i++) {
    word = enWords[i];
    if(isVowel(word)){
      enWords[i] = word + "way ";
    }else{
      if(word.length > 1){
        if(isVowel(word[1])){
          var newWord = "";
          for (var a = 1; a < word.length; a++) {
            newWord = newWord + word[a];
          }
          newWord = newWord + word[0] + "ay ";
          word = newWord;
        }else{
          var newWord = "";
          if(word.length > 2){
            for (var a = 2; a < word.length; a++) {
              newWord = newWord + word[a];
            }
            newWord = newWord + word[0] + word[1] + "ay ";
            word = newWord;
          }else{
            word = word[1] + word[0] + "ay ";
          }
        }
      }else{
        word = word + "ay ";
      }
      enWords[i] = word;
    }
    plText = plText + enWords[i];
    print(enWords[i]);
  }
  //pl.value(plText);
  pl.html(plText);
  console.log('you are typing: ', this.value());
}

function isVowel(str){
  for (var i = 0; i < vowels.length; i++) {
    if ( str[0] === vowels[i]){
      return true;
    }
  }
  return false;
}
