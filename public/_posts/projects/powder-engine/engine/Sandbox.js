class Sandbox{

    cells = [];
    blacklist = [];

    constructor(size){
        this.size = size;
    }

    populate(){
        for(let i = 0; i < this.size.y; i++){
            for(let j = 0; j < this.size.x; j++){
                this.cells[i * this.size.x + j] = new Cell(new Vector(j, i));
            }
        }

        for(let i = 0; i < this.cells.length; i++){
            this.cells[i].computeNeighbours();
        }
    }

    step(){

        // for(let i = 0; i < this.cells.length; i++){
        //     // if(!this.blacklist.includes(this.cells[i])){
        //         if(this.cells[i].particle.moved){
        //             continue;
        //         }
        //     this.cells[i].step();
        //     // }
        // }

        // for(let i = 0; i < this.size.y; i++/*i+=2*/){
        //     for(let j = 0; j < this.size.x; j+=4){
        //         this.cells[i * this.size.x + j].step();
        //     }

        //     for(let j = this.size.x + (this.size.x % 4 == 1 ? 0:-1); j > 0; j-=4){
        //         this.cells[i * this.size.x + j].step();
        //     }

            
        //     for(let j = 2; j < this.size.x; j+=4){
        //         this.cells[i * this.size.x + j].step();
        //     }

        //     for(let j = this.size.x + (this.size.x-2 % 4 == 1 ? 0:-3); j > 0; j-=4){
        //         this.cells[i * this.size.x + j].step();
        //     }
        // }

        let everyNRows = 1;
        let everyNCols = 1;

        for(let a = 0; a < everyNRows; a++){
            for(let b = 0; b < everyNCols; b++){
                // if(a % 2 == 0){
                    for(let i = this.size.y - (1 + a); i >= 0; i -= everyNRows){
                        for(let j = b; j < this.size.x; j += everyNCols){
                            if(this.cells[i * this.size.x + j].particle.moved){
                                continue;
                            }
                            this.cells[i * this.size.x + j].step();
                        }
                    }
                // }else{
                //     for(let i = this.size.y + (this.size.y-1 % (a-1) == 0 ? -(a+1):-a); i >= 0; i-=everyNRows){
                //         for(let j = b; j < this.size.x; j+= everyNCols){
                //             this.cells[i * this.size.x + j].step();
                //         }
                //     }
                // }
            }
        }

        // for(let i = this.size.y + (this.size.y % 2 == 1 ? 0:-1); i > 0; i-=2){
        //     for(let j = 0; j < this.size.x; j+=2){
        //         this.cells[i * this.size.x + j].step();
        //     }

        //     for(let j = this.size.x + (this.size.x % 2 == 1 ? 0:-1); j > 0; j-=2){
        //         this.cells[i * this.size.x + j].step();
        //     }
        // }

        // Reset the particle moved variable;
        for(let i = 0; i < this.cells.length; i++){
            this.cells[i].particle.moved = false;
            // this.cells[i].particle.moveCount = 0;
        }
    }

    show(){
        // blendMode(BLEND);
        // blendMode(REMOVE);
        noStroke();
        fill(22);
        rect(0, 0, this.size.x * cellSize, this.size.y * cellSize);
        
        // blendMode(LIGHTEST);
        for(let i = 0; i < this.cells.length; i++){
            if(this.cells[i].getType() != EMPTY_PARTICLE){
                this.cells[i].show();
            }
        }
    }

    addParticle(location, type){
        let ij = location.copy();

        if(ij.x >= this.size.x || ij.x < 0 || ij.y >= this.size.y || ij.y < 0){
            return;
        }

        if(this.cells[ij.y * this.size.x + ij.x].getType() == EMPTY_PARTICLE){
            Particle.spawn(this.cells[ij.y * this.size.x + ij.x], type);
        }else if(type == EMPTY_PARTICLE){
            Particle.spawn(this.cells[ij.y * this.size.x + ij.x], type);
        }
    }

    getCell(location){
        return this.cells[location.y * this.size.x + location.x];
    }

    static updateCellSize(){
        cellSize = Math.min((w) / sandboxSize.x,(h) / sandboxSize.y);
    }

    static getCellCoordinates(location){
        let ij = location.copy();
        ij.multiply(1 / cellSize);
        ij.round();
        return ij;
    }
}