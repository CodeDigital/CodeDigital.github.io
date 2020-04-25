var birthday = new Date();
birthday.setFullYear(2000);
birthday.setMonth(10)
birthday.setDate(3);

var age = new Date().getTime() - birthday.getTime();
age /= 1000 * 60 * 60 * 24 * 365.25;
age = Math.floor(age);

document.getElementById('about-age').innerText = age;

var aboutAgeInterval = setInterval(function(){
    if(document.getElementById('about-age').innerText != age){
        document.getElementById('about-age').innerText = age;
    }
},100);
