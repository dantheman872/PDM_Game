/**
 * Controls the droppable item
 */
class Item {

    /**
     * Sets up parameters for the items
     */
    constructor(){

        this.x = [];
        this.y = [];
        this.w = 20;
        this.h = 20;
        this.rockA = 0;
    }

    /**
     * Spawns a new item
     * @param {*} x - new x coordinate
     * @param {*} y - new x coordinate
     */
    spawn(x, y){

        this.x.push(x)
        this.y.push(y)
    }

    /**
     * Displays the items image
     */
    show(){

        for(let i = 0; i < this.x.length; i++){

            imageMode(CENTER)
            image(stonePickup,(this.x[i] * 50) - player.getX() + 25, (this.y[i] * 50) - player.getY() + 25)
            imageMode(CORNER)
        }
    }

    /**
     * Checks if the player is colliding with the item
     */
    isColliding(){

        for(let i = 0; i < item.x.length; i++){
        
            if(player.isColliding(this.x[i] * 50, this.y[i] * 50, this.w, this.h)){

                this.pickUp()
            }
        }
    }

    /**
     * Removes the item and adds one to a item counter
     */
    pickUp(){

        this.x.splice(0,10);
        this.y.splice(0,10);
        this.rockA += 1;
    }    
}