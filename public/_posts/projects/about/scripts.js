const birthday = new Date();
birthday.setFullYear(2000);
birthday.setMonth(10)
birthday.setDate(3);

function setAge(){
    var age = new Date().getTime() - birthday.getTime();
    age /= 1000 * 60 * 60 * 24 * 365.25;
    age = Math.round(age);

    document.getElementById('about-age').innerText = age;
    console.log("Age: " + age);
}


document.getElementById('about-age').onmouseover = setAge;
// document.onmousemove = setAge;

// setInterval(function(){
    
//     var age = new Date().getTime() - birthday.getTime();
//     age /= 1000 * 60 * 60 * 24 * 365.25;
//     age = Math.floor(age);

//     if(document.getElementById('about-age').innerText != age){
//         document.getElementById('about-age').innerText = age;
//         console.log('Age set to: ' + age);
//     }
// },100);
