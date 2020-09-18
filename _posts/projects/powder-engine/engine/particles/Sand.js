const SAND_PARTICLE = 'sand';
const SAND_DENSITY = 30;

class Sand extends Particle{

    density = SAND_DENSITY;
    type = SAND_PARTICLE;
    flammable = 0.05;

    constructor(cell){
        super(cell, SAND_DENSITY);

        let pNoise = noise(this.cell.location.x / 10, this.cell.location.y / 10);
        let r = map(pNoise, 0, 1, 205, 255);
        let g = map(pNoise, 0, 1, 205, 255);
        let b = map(pNoise, 0, 1, 170, 220);
        this.colour = color(r, g, b);
    }

    setColour(){
        noStroke();
        fill(this.colour);
    }

    step(counter=0){

        this.wantToMove(this.cell.below);
        if(this.moved){
            return;
        }

        if(randomBoolean()){
            this.wantToMove(this.cell.belowLeft);
        }else{
            this.wantToMove(this.cell.belowRight);
        }

        // this.moved = true;

        super.step();

        return;

        if(this.moved){
            return;
        }

        this.wantToMove(this.cell.below, counter);
            
        if(this.moved){
            return;
        }

        if(Math.random() > 0.5){
            this.wantToMove(this.cell.belowLeft, counter);

            if(this.moved){
                return;
            }
        // }
        }else{
        // if(this.cell.belowRight){
            this.wantToMove(this.cell.belowRight, counter);
            if(this.moved){
                return;
            }
        // }
        }

        // this.moved = true;

        return;
    }
}