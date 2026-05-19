/**
 * Controls the player
 */
class Player {

    /**
     * Sets the players parameters
     * @param {*} x - Players x coordinate
     * @param {*} y - Players y coordinate
     * @param {*} w - Players width
     * @param {*} h - Players height
     */
    constructor(x, y, w, h){
        this.x = x;
        this.y = y;
        this.w = w
        this.h = h
        this.xDir = 0
        this.yDir = 0
        
    }

    /**
     * Shows the players different animations
     */
    show(){
        
        //If walking right
        if(this.xDir == 5){

            if(breaking){

                image(playerAttackRight, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            } else {

                image(playerWalkingRight, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            }

        } else

        //If walking left
        if(this.xDir == -5){

            if(breaking){
            
                image(playerAttackLeft, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            } else {

                image(playerWalkingLeft, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            }
        } else

        //If walking down
        if(this.yDir == 5){

            if(breaking){
            
                image(playerAttackDown, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            } else {

                image(playerWalkingDown, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            }
        } else

        //If walking up
        if(this.yDir == -5){

            if(breaking){
            
                image(playerAttackUp, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            } else {

                image(playerWalkingUp, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
            }

        //If idle
        } else {

            breaking = false
            image(playerIdle, width/2 - 25, height/2 - 25, this.w * 2, this.h * 2)
        }
    }

    /**
     * Moves the player if applicable, if not starts the breaking process
     */
    move(){

        //If moving right
        if(this.xDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
                breaking = false

            } else {

                breakObject()
            }
        }  

        //If moving Left
        if(this.xDir == -5){

            if(!grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50)) && 
                !grid.isOccupied(Math.floor((this.x - 5 + width/2) / 50) , Math.floor((this.y + height/2) /50) + 1)){

                this.x += this.xDir
                breaking = false
            } else {

                breakObject()
            }
        } 

        //If moving down
        if(this.yDir == 5){

            if(!grid.isOccupied(Math.floor((this.x + width/2) / 50), Math.floor((this.y + height/2) /50) + 1) && 
                !grid.isOccupied(Math.floor((this.x + width/2) / 50) + 1, Math.floor((this.y + height/2) /50) + 1)){

                this.y += this.yDir
                breaking = false
            } else {

                breakObject()
            }
        } 

        //If moving up
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

    /**
     * Sets the direction for the x axis
     * @param {} xDir - Desired x direction
     */
    setXDir(xDir){

        this.xDir = xDir
    }

    /**
     * Sets the direction for the y axis
     * @param {} yDir - Desired x direction
     */
    setYDir(yDir){

        this.yDir = yDir
    }

    /**
     * Returns the players x value
     * @returns Players x value
     */
    getX(){

        return this.x 
    }

    /**
     * Returns the players y value
     * @returns Players y value
     */
    getY(){

        return this.y
    }

    /**
     * Checks if the player is colliding with given parameters
     * @param {*} x - x coordinate to check against
     * @param {*} y - y coordinate to check against
     * @param {*} w - width of object to check against
     * @param {*} h - height of object to check against
     * @returns true if colliding
     */
    isColliding(x, y, w, h){

        if((this.x + (width/2)) - x < (this.w/2) + (w/2) && (this.x + (width/2)) - x > -(this.w/2 + (w/2))
            && (this.y + (height/2)) - y < this.h/2 + h/2 && this.y + height/2 - y > -(this.h/2 + h/2)){

             return true              
        }
    }
}