var cnv
var w, h;
let ppm;
let G = 9.81;
let eulerPendulum, rk4Pendulum, symprk4Pendulum; 
let fps = 45;
let dt = 1/fps;
let numMeters = 7.5;
let mobileNum = 4.5;

function unmountScript(){
    remove();
  }

function setup(){
    frameRate(fps);
    setWidthHeight();
    cnv = createCanvas(w, h);
    cnv.parent('p5-canvas-double-pendulum');
    if(w < 750){
        ppm = Math.min(w, h) / mobileNum;
    }else{
        ppm = Math.min(w, h) / numMeters;
    }

    // smooth();

//     * {
//        *  origin, [REQUIRED]
//        *  a1, a2, [REQUIRED]
//        *  av1, av2,
//        *  aa1, aa2,
//        *  m1, m2, [REQUIRED]
//        *  len1, len2 [REQUIRED]
//        *  integrator [REQUIRED] 
//        Where 0 = Euler, 1 = RK4 Standard, 2 = Symplectic RK4
//    * }

    let options = {
        origin:(-2 * w/6),
        a1:3,
        a2:2,
        m1:2,
        m2:2,
        len1:1,
        len2:1,
        integrator:0
    }

    eulerPendulum = new DoublePendulum(options);

    options.origin = 0;
    options.integrator = 1;

    rk4Pendulum = new DoublePendulum(options);

    options.origin = (2 * w/6);
    options.integrator = 2;

    symprk4Pendulum = new DoublePendulum(options);
}
  
function draw() {

    // if(frameRate()){
        // fps = frameRate();
        // dt = 1/fps;
        // console.log(dt);
    // }

    background(34, 100);
    // background(0);

    if(w < 750){
        translate(w/2, h/3);
    }else{
        translate(w/2, h/4);
    }
    // scale(1, -1);


    if(w < 750){
        rk4Pendulum.step(dt);

        rk4Pendulum.show();
    }else{

        eulerPendulum.step(dt);
        rk4Pendulum.step(dt);
        symprk4Pendulum.step(dt);

        eulerPendulum.show();
        rk4Pendulum.show();
        symprk4Pendulum.show();
    }
}

function windowResized() {
    setWidthHeight();
    resizeCanvas(w,h);
}

function setWidthHeight(){
    h = sketchHeight();
    w = sketchWidth();

    if(w < 750){
        ppm = Math.min(w, h) / mobileNum;
    }else{
        ppm = Math.min(w, h) / numMeters;
    }

    if(eulerPendulum != undefined){
        eulerPendulum.origin = -w/3;
        rk4Pendulum.origin = 0;
        symprk4Pendulum.origin = w/3;
    }
}

function unmountScript(){
	console.log('Unmounted!');
}

function resetPendula(){
    let options = {
        origin:(-w/3),
        a1:Math.PI*2*Math.random(),
        a2:Math.PI*2*Math.random(),
        m1:2,
        m2:2,
        len1:1,
        len2:1,
        integrator:0
    }

    eulerPendulum = new DoublePendulum(options);

    options.origin = 0;
    options.integrator = 1;

    rk4Pendulum = new DoublePendulum(options);

    options.origin = (w/3);
    options.integrator = 2;

    symprk4Pendulum = new DoublePendulum(options);
}

document.getElementById('double-pendulum-reset').onclick = resetPendula;

function roundDP(num, d){
    return Math.round(num * 10**d) / 10**d;
}