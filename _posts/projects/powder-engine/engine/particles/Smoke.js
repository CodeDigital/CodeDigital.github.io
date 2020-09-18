const SMOKE_PARTICLE = 'smoke';
const SMOKE_DENSITY = 3;

class Smoke extends Particle{

    density = SMOKE_DENSITY;
    type = SMOKE_PARTICLE;
    flammable = 0.2;

    constructor(cell){
        super(cell, SMOKE_DENSITY);

        // this.spreadTendency = Math.random();
        this.spreadTendency = 0.5;

        let sNoise = noise(this.cell.location.x / 10, this.cell.location.y / 10);
        this.colour = map(sNoise, 0, 1, 100, 200);
    }

    setColour(){
        noStroke();
        // strokeWeight(0.5);
        // stroke(0, 150, 255);

        // let colour = map(Math.random(), 0, 1, 100, 200);
        // fill(colour);
        fill(this.colour, 200);
    }

    step(counter=0){

        // this.wantToMove(this.cell.above);
        // if(this.moved){
        //     return;
        // }

        let moveDir = randomIJ();
        if(moveDir.y != -1 && randomBoolean()){
            moveDir.y -= Math.random() * 2;
            moveDir.y = Math.round(moveDir.y);
        }
        let checkDir = this.cell.location.copy();
        checkDir.add(moveDir);
        let checkCell = sandbox.getCell(checkDir);
        this.wantToMove(checkCell);

        // super.step();

        // this.moved = true;

        return;

        if(this.moved){
            // console.log('early out')
            // this.moved = false;
            return;
        }

        // this.moved = true;
        // depthCheck += MAX_DEPTH_CHECKS

        // while(!this.moved && depthCheck >= 0){
        // if(depthCheck >= 0){
        // if(this.cell.below){
            this.wantToMove(this.cell.above, counter);
            
            if(this.moved){
                return;
            }
        // }

        // if(this.cell.belowLeft){
        if(Math.random() > 0.5){
            this.wantToMove(this.cell.aboveLeft, counter);

            if(this.moved){
                return;
            }
        // }
        }else{
        // if(this.cell.belowRight){
            this.wantToMove(this.cell.aboveRight, counter);
            if(this.moved){
                return;
            }
        // }
        }

        if(Math.random() > 0.5){
        // if(this.cell.left){
            this.wantToMove(this.cell.left, counter);

            if(this.moved){
                return;
            }
        // }
        }else{
        // if(this.cell.right){
            this.wantToMove(this.cell.right, counter);

            if(this.moved){
                return;
            }
        }
            // depthCheck --;
        // }
        // }

        // this.moved = true;

        return;
    }
}