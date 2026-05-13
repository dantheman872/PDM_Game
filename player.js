class Player {

    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xDir = 0
        this.yDir = 0
        this.w = 50
        this.h = 50
    }

    show(){
        
        //fill(100,100,200);
        //rect(width/2, height/2 , 50);
        //rect(this.x + width/2 - this.x, this.y + height/2 - this.y, 10)

        if(this.xDir == 5 && breaking){

            image(playerAttackRight, width/2 - 25, height/2 - 25, 100, 100)
        } else

        if(this.xDir == -5 && breaking){

            image(playerAttackLeft, width/2 - 25, height/2 - 25, 100, 100)
        } else

        if(this.yDir == 5 && breaking){

            image(playerAttackDown, width/2 - 25, height/2 - 25, 100, 100)
        } else

        if(this.yDir == -5 && breaking){

            image(playerAttackUp, width/2 - 25, height/2 - 25, 100, 100)
        } else {

            breaking = false
            image(playerIdle, width/2 - 25, height/2 - 25, 100, 100)
        }
    }

    move(){

        if(this.xDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
                breaking = false

            } else {

                breakObject()
            }
        }  


        if(this.xDir == -5){

            if(!grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
                breaking = false
            } else {

                breakObject()
            }
        } 


        if(this.yDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50), Math.floor((this.y + height/2) /50) + 1) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.y += this.yDir
                breaking = false
            } else {

                breakObject()
            }
        } 

        if(this.yDir == -5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50), Math.floor((this.y -5 + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y -5 + height/2) /50))){

                this.y += this.yDir
                breaking = false
            } else {

                breakObject()
            }            
        }
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

    isColliding(x, y, w, h){

        if((this.x + (width/2)) - x < (this.w/2) + (w/2) && (this.x + (width/2)) - x > -(this.w/2 + (w/2))
            && (this.y + (height/2)) - y < this.h/2 + h/2 && this.y + height/2 - y > -(this.h/2 + h/2)){

             return true              
        }
    }
}