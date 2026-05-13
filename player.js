class Player {

    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xDir = 0
        this.yDir = 0
    }

    show(){
        
        fill(100,100,200);
        rect(width/2, height/2 , 50);
        //rect(this.x + width/2 - this.x, this.y + height/2 - this.y, 10)
    }

    move(){

        if(this.xDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
            } else {

                breakObject()
            }
        }  


        if(this.xDir == -5){

            if(!grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
            } else {

                breakObject()
            }
        } 


        if(this.yDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50), Math.floor((this.y + height/2) /50) + 1) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.y += this.yDir
            } else {

                breakObject()
            }
        } 

        if(this.yDir == -5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50), Math.floor((this.y -5 + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y -5 + height/2) /50))){

                this.y += this.yDir
            } else {

                breakObject()
            }            
        }

        item.isColliding(this.x + width/2, this.y + height/2, this.size)
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