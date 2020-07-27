function stepEuler(dp, dt){
    let aa1 = calcAA1(dp);
    let aa2 = calcAA2(dp);

    dp.av1 += aa1 * dt;
    dp.av2 += aa2 * dt;
  
    dp.a1 += dp.av1 * dt;
    dp.a2 += dp.av2 * dt;
}

function stepRK4(dp, dt){
    //K Index List
    //     0     1     2     3     [4     5]
    //     a1    av1   a2    av2   [aa1   aa2]
    let origins = dp.getOptions();
    origins.a1 = dp.a1;
    origins.a2 = dp.a2;
    origins.av1 = dp.av1;
    origins.av2 = dp.av2;

    // let origins = [dp.a1, dp.a2, dp.av1, dp.av2];
    // let kVals = zeros(4);
    let kVals = Object.assign({}, origins);

    //k1
    let k1 = Object.assign({}, origins);
    k1.aa2 = calcAA2(origins);
    k1.aa1 = calcAA1(origins);


    // k1[5] = finda2(origins[0], origins[1], origins[2], origins[3]);
    // k1[4] = finda1(origins[0], origins[1], origins[2], origins[3]);
    // for (let i = 0; i < origins.length; i++) {
    //     k1[i] = origins[i];
    // }

    //k2
    kVals.a1 = origins.a1 + ((dt/2) * k1.av1);
    kVals.a2 = origins.a2 + ((dt/2) * k1.av2);
    kVals.av1 = origins.av1 + ((dt/2) * k1.aa1);
    kVals.av2 = origins.av2 + ((dt/2) * k1.aa2);

    // for (let i = 0; i<kVals.length; i++) {
        // kVals[i] = origins[i] + ((dt/2) * k1[i+2]);
    // }

    let k2 = Object.assign({}, kVals);
    k2.aa2 = calcAA2(kVals);
    k2.aa1 = calcAA1(kVals);

    // let k2 = zeros(6);
    // k2[5] = finda2(kVals[0], kVals[1], kVals[2], kVals[3]);
    // k2[4] = finda1(kVals[0], kVals[1], kVals[2], kVals[3]);  
    // for (let i = 0; i<kVals.length; i++) {
    //     k2[i] = kVals[i];
    // }

    //k3
    kVals.a1 = origins.a1 + ((dt/2) * k2.av1);
    kVals.a2 = origins.a2 + ((dt/2) * k2.av2);
    kVals.av1 = origins.av1 + ((dt/2) * k2.aa1);
    kVals.av2 = origins.av2 + ((dt/2) * k2.aa2);

    // for (let i = 0; i<kVals.length; i++) {
    //     kVals[i] = origins[i] + ((dt/2) * k2[i+2]);
    // }

    let k3 = Object.assign({}, kVals);
    k3.aa2 = calcAA2(kVals);
    k3.aa1 = calcAA1(kVals);

    // let k3 = zeros(6);
    // k3[5] = finda2(kVals[0], kVals[1], kVals[2], kVals[3]);
    // k3[4] = finda1(kVals[0], kVals[1], kVals[2], kVals[3]);  
    // for (let i = 0; i<kVals.length; i++) {
    //     k3[i] = kVals[i];
    // }

    //k4
    kVals.a1 = origins.a1 + ((dt) * k3.av1);
    kVals.a2 = origins.a2 + ((dt) * k3.av2);
    kVals.av1 = origins.av1 + ((dt) * k3.aa1);
    kVals.av2 = origins.av2 + ((dt) * k3.aa2);

    // for (let i = 0; i<kVals.length; i++) {
    //     kVals[i] = origins[i] + ((dt) * k3[i+2]);
    // }

    let k4 = Object.assign({}, kVals);
    k4.aa2 = calcAA2(kVals);
    k4.aa1 = calcAA1(kVals);

    // let k4 = zeros(6);
    // k4[5] = finda2(kVals[0], kVals[1], kVals[2], kVals[3]);
    // k4[4] = finda1(kVals[0], kVals[1], kVals[2], kVals[3]);  
    // for (let i = 0; i<kVals.length; i++) {
    //     k4[i] = kVals[i];
    // }

    dp.av1 += (dt / 6) * (k1.aa1 + 2 * k2.aa1 + 2 * k3.aa1 + k4.aa1);
    dp.av2 += (dt / 6) * (k1.aa2 + 2 * k2.aa2 + 2 * k3.aa2 + k4.aa2);
    //a1 += av1 * dt;
    //a2 += av2 * dt;
    dp.a1 += (dt / 6) * (k1.av1 + 2 * k2.av1 + 2 * k3.av1 + k4.av1);
    dp.a2 += (dt / 6) * (k1.av2 + 2 * k2.av2 + 2 * k3.av2 + k4.av2);
}

function stepSymplecticRK4(dp, dt){

  //K Index List
  //     0     1     2     3     4     5     6     7
  //     a1    a2    pa1   pa2   av1   av2   pva1  pva2

    let origins = dp.getOptions();
    origins.a1 = dp.a1;
    origins.a2 = dp.a2;
    origins.pa1 = dp.pa1;
    origins.pa2 = dp.pa2;
//   let[] origins = {a1, a2, pa1, pa2};
//   let[] kVals = new let [4];
    let kVals = Object.assign({}, origins);

  //k1

    let k1 = Object.assign({}, origins);

//   let[] k1 = new let[4];
  k1.pva2 = calcPVA2(origins);
  k1.pva1 = calcPVA1(origins);
  k1.av2 = calcAV2(origins);
  k1.av1 = calcAV1(origins);


  //k2
  kVals.a1 = origins.a1 + ((dt/2) * k1.av1);
  kVals.a2 = origins.a2 + ((dt/2) * k1.av2);
  kVals.pa1 = origins.pa1 + ((dt/2) * k1.pva1);
  kVals.pa2 = origins.pa2 + ((dt/2) * k1.pva2);

//   for (int i = 0; i<kVals.length; i++) {
//     kVals[i] = origins[i] + ((dt/2) * k1[i]);
//   }

    let k2 = Object.assign({}, kVals);
    k2.pva2 = calcPVA2(kVals);
    k2.pva1 = calcPVA1(kVals);
    k2.av2 = calcAV2(kVals);
    k2.av1 = calcAV1(kVals);

//   let[] k2 = new let[4];
//   k2[3] = calcPVA2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k2[2] = calcPVA1(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k2[1] = calcAV2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k2[0] = calcAV1(kVals[0], kVals[1], kVals[2], kVals[3]);

  //k3
  kVals.a1 = origins.a1 + ((dt/2) * k2.av1);
  kVals.a2 = origins.a2 + ((dt/2) * k2.av2);
  kVals.pa1 = origins.pa1 + ((dt/2) * k2.pva1);
  kVals.pa2 = origins.pa2 + ((dt/2) * k2.pva2);
//   for (int i = 0; i<kVals.length; i++) {
//     kVals[i] = origins[i] + ((dt/2) * k2[i]);
//   }

let k3 = Object.assign({}, kVals);
k3.pva2 = calcPVA2(kVals);
k3.pva1 = calcPVA1(kVals);
k3.av2 = calcAV2(kVals);
k3.av1 = calcAV1(kVals);

//   let[] k3 = new let[4];
//   k3[3] = calcPVA2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k3[2] = calcPVA1(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k3[1] = calcAV2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k3[0] = calcAV1(kVals[0], kVals[1], kVals[2], kVals[3]); 

  //k4
  kVals.a1 = origins.a1 + ((dt) * k3.av1);
  kVals.a2 = origins.a2 + ((dt) * k3.av2);
  kVals.pa1 = origins.pa1 + ((dt) * k3.pva1);
  kVals.pa2 = origins.pa2 + ((dt) * k3.pva2);
//   for (int i = 0; i<kVals.length; i++) {
//     kVals[i] = origins[i] + ((dt) * k3[i]);
//   }

let k4 = Object.assign({}, kVals);
k4.pva2 = calcPVA2(kVals);
k4.pva1 = calcPVA1(kVals);
k4.av2 = calcAV2(kVals);
k4.av1 = calcAV1(kVals);


//   let[] k4 = new let[4];
//   k4[3] = calcPVA2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k4[2] = calcPVA1(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k4[1] = calcAV2(kVals[0], kVals[1], kVals[2], kVals[3]);
//   k4[0] = calcAV1(kVals[0], kVals[1], kVals[2], kVals[3]); 

  dp.pa1 += (dt / 6) * (k1.pva1 + 2 * k2.pva1 + 2 * k3.pva1 + k4.pva1);
  dp.pa2 += (dt / 6) * (k1.pva2 + 2 * k2.pva2 + 2 * k3.pva2 + k4.pva2);

  dp.av1 = (k1.av1 + 2 * k2.av1 + 2 * k3.av1 + k4.av1)/6;
  dp.av2 = (k1.av2 + 2 * k2.av2 + 2 * k3.av2 + k4.av2)/6;

  dp.a1 += dt * dp.av1;
  dp.a2 += dt * dp.av2;
}

function calcAA1(dp){
    let aa1 = ((-G)*(2 * dp.m1 + dp.m2)*(Math.sin(dp.a1))) - ((dp.m2 * G) * (Math.sin(dp.a1 - 2*dp.a2))) - ((2*Math.sin(dp.a1 - dp.a2)*dp.m2*(dp.av2 * dp.av2 * dp.len2 + dp.av1 * dp.av1 * dp.len1 * Math.cos(dp.a1-dp.a2))));
    aa1 /= (dp.len1 * (2 * dp.m1 + dp.m2 - dp.m2 * Math.cos(2*dp.a1 - 2*dp.a2)));
    return aa1;
}

function calcAA2(dp){
    let aa2 = 2 * Math.sin(dp.a1 - dp.a2) * (dp.av1 * dp.av1 * dp.len1 * (dp.m1 + dp.m2) + G * (dp.m1 + dp.m2) * Math.cos(dp.a1) + dp.av2 * dp.av2 * dp.len2 * dp.m2 * Math.cos(dp.a1 - dp.a2));
    aa2 /= (dp.len2 * (2 * dp.m1 + dp.m2 - dp.m2 * Math.cos(2*dp.a1 - 2*dp.a2)));
    return aa2;
}

function calcAV1(dp) {
    let a = dp.len2 * dp.pa1;
    let b = dp.len1 * dp.pa2 * Math.cos(dp.a1 - dp.a2);
    let c = dp.len1 * dp.len1 * dp.len2;
    let d = dp.m1 + (dp.m2 * Math.sin(dp.a1 - dp.a2) * Math.sin(dp.a1 - dp.a2));
    return (a - b)/(c * d);
}
  
function calcAV2(dp) {
    let a = dp.m2 * dp.len2 * dp.pa1 * Math.cos(dp.a1 - dp.a2);
    let b = (dp.m1 + dp.m2) * dp.len1 * dp.pa2;
    let c = dp.m2 * dp.len1 * dp.len2 * dp.len2;
    let d = (dp.m1 + (dp.m2 * Math.sin(dp.a1 - dp.a2) * Math.sin(dp.a1 - dp.a2)));
    return (b - a)/(c * d);
}
  
function calcPVA1(dp) {
    let h1 = calcH1(dp);
    let h2 = calcH2(dp);
  
    let a = (dp.m1 + dp.m2) * G * dp.len1 * Math.sin(dp.a1);
    let b = h2 * Math.sin(2 * (dp.a1 - dp.a2));
  
    return ((b - h1) - a);
}
  
function calcPVA2(dp) {
    let h1 = calcH1(dp);
    let h2 = calcH2(dp);
  
    let a = dp.m2 * G * dp.len2 * Math.sin(dp.a2);
    let b = h2 * Math.sin(2 * (dp.a1 - dp.a2));
    return ((h1 - a) - b);
}
  
function calcH1(dp) {
  
    let a = dp.pa1 * dp.pa2 * Math.sin(dp.a1 - dp.a2);
    let b = dp.len1 * dp.len2;
    let c = dp.m1 + (dp.m2 * Math.sin(dp.a1 - dp.a2) * Math.sin(dp.a1 - dp.a2));
  
    return a/(b*c);
}
  
function calcH2(dp) {
    let a = dp.m2 * dp.len2 * dp.len2 * dp.pa1 * dp.pa1;
    let b = (dp.m1 + dp.m2) * dp.len1 * dp.len1 * dp.pa2 * dp.pa2;
    let c = 2 * dp.m2 * dp.len1 * dp.len2 * dp.pa1 * dp.pa2 * Math.cos(dp.a1 - dp.a2);
    let d = 2 * dp.len1 * dp.len1 * dp.len2 * dp.len2;
    let e = dp.m1 + (dp.m2 * Math.sin(dp.a1 - dp.a2) * Math.sin(dp.a1 - dp.a2));
  
    return ((a+b)-c)/(d*e*e);
}

function zeros(size){
    let arr = [];
    for(let i = 0; i < size; i++){
        arr[i] = 0;
    }
    return arr;
}