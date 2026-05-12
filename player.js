class Player {

    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xDir = 0
        this.yDir = 0
    }

    show(){
        
        // fill(220)
        // rect(this.x, this.y, this.size);     

        fill(100,100,200);
        rect(this.x + width/2 - this.x, this.y + height/2 - this.y, 50);
    }

    move(){

        //console.log(round((this.x + height/2) /50) + " + " + round((this.y + height/2) /50))

        if(this.xDir == 5){

            if(!grid.isOccupied(round((this.x + width/2) / 50) + 1, round((this.y + height/2) / 50))){

                this.x += this.xDir;
            }
        }

        if(this.xDir == -5){

            if(!grid.isOccupied(round((this.x + width/2) / 50) - 1, round((this.y + height/2) / 50))){

                this.x += this.xDir;
            }
        }

        if(this.yDir == 5){

            if(!grid.isOccupied(round((this.x + width/2) / 50), round((this.y + height/2) / 50) + 1)){

                this.y += this.yDir;
            }
        }

        if(this.yDir == -5){

            if(!grid.isOccupied(round((this.x + width/2) / 50), round((this.y + height/2) / 50) -1)){

                this.y += this.yDir;
            }
        }

        // if(!grid.isOccupied(round((this.x + width/2) / 50), round((this.y + height/2) / 50))){
        
        //     this.x += this.xDir;
        //     this.y += this.yDir;             
        // }
        
    }

    setXDir(xDir){

        this.xDir = xDir
    }

    setYDir(yDir){

        this.yDir = yDir
    }

    getX(){

        return this.x
    }

    getY(){

        return this.y
    }
}