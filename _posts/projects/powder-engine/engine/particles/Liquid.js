class Liquid extends Particle {
    constructor(cell, density){
        super(cell, density);
    }

    step(counter=0){
        this.wantToMove(this.cell.below);
        if(this.moved){
            return;
        }

        if(randomBoolean()){
            this.wantToMove(this.cell.belowLeft);
            if(this.moved){
                return;
            }
            this.wantToMove(this.cell.left);
            if(this.moved){
                return;
            }
        }else{
            this.wantToMove(this.cell.belowRight);
            if(this.moved){
                return;
            }
            this.wantToMove(this.cell.right);
            if(this.moved){
                return;
            }
        }

        if(this.moved){
            return;
        }

        // if(randomBoolean()){
        //     // this.wantToMove(this.cell.belowLeft);
        //     // if(this.moved){
        //     //     return;
        //     // }
        //     this.wantToMove(this.cell.left);
        //     if(this.moved){
        //         return;
        //     }
        // }else{
        //     // this.wantToMove(this.cell.belowRight);
        //     // if(this.moved){
        //     //     return;
        //     // }
        //     this.wantToMove(this.cell.right);
        //     if(this.moved){
        //         return;
        //     }
        // }

        return;
    }
}