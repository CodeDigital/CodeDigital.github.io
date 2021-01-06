function randomBoolean(){
    return (Math.random() >= 0.5);
}

function randomIJ(){
    let dirX = map(Math.random(), 0, 1, -1.49, 1.49);
    dirX = Math.round(dirX);
    let dirY = map(Math.random(), 0, 1, -1.49, 1.49);
    dirY = Math.round(dirY);

    // while(dirX == 0 && dirY == 0){
    //     let dirX = map(Math.random(), 0, 1, -1.49, 1.49);
    //     dirX = Math.round(dirX);
    //     let dirY = map(Math.random(), 0, 1, -1.49, 1.49);
    //     dirY = Math.round(dirY);
    // }

    return new Vector(dirX, dirY);
}