class Cell{
    constructor(location){
        this.location = location;
        this.particle = Particle.empty(this);
    }

    computeNeighbours(){
        this.aboveLeft = Cell.getRelative(this, new Vector(-1, -1));
        this.above = Cell.getRelative(this, new Vector(0, -1));
        this.aboveRight = Cell.getRelative(this, new Vector(1, -1));
        this.left = Cell.getRelative(this, new Vector(-1, 0));
        this.right = Cell.getRelative(this, new Vector(1, 0));
        this.belowLeft = Cell.getRelative(this, new Vector(-1, 1));
        this.below = Cell.getRelative(this, new Vector(0, 1));
        this.belowRight = Cell.getRelative(this, new Vector(1, 1));
    }

    setParticle(particle){
        particle.setCell(this);
    }

    step(counter = 0){
        if(counter >= MAX_DEPTH_CHECKS){
            return;
        };
        this.particle.step(counter);
    }

    show(){
        // blendMode(LIGHTEST);
        this.particle.setColour();
        // rect(this.location.x * cellSize - 0.5, this.location.y * cellSize - 0.5, cellSize + 1, cellSize + 1);
        // rect(this.location.x * cellSize - 0.2, this.location.y * cellSize - 0.2, cellSize + 0.4, cellSize + 0.4);
        rect(this.location.x * cellSize, this.location.y * cellSize , cellSize, cellSize);
        // rect(this.location.x * cellSize, this.location.y * cellSize , cellSize, cellSize);

    }

    getType(){
        return this.particle.type;
    }

    static getRelative(cell, dir){
        if(dir.x == 1){
            if(cell.location.x >= sandbox.size.x - 1){
                return;
            }
        }else if(dir.x == -1){
            if(cell.location.x <= 0){
                return;
            }
        }

        if(dir.y == 1){
            if(cell.location.y >= sandbox.size.y - 1){
                return;
            }
        }else if(dir.y == -1){
            if(cell.location.y <= 0){
                return;
            }
        }

        let relativeLocation = cell.location.copy();
        relativeLocation.add(dir);
        // console.log('this');

        return sandbox.getCell(relativeLocation);
    }
}