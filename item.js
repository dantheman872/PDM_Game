class Item {

    constructor(){

        this.x = [];
        this.y = [];
        this.w = 20;
        this.h = 20;
        this.rockA = 0;
    }

    spawn(x, y){

        this.x.push(x)
        this.y.push(y)
    }

    show(){

        for(let i = 0; i < this.x.length; i++){

            imageMode(CENTER)
            image(stonePickup,(this.x[i] * 50) - player.getX() + 25, (this.y[i] * 50) - player.getY() + 25)
            imageMode(CORNER)

            // rectMode(CENTER)
            // rect((this.x[i] * 50) - player.getX() + 25, (this.y[i] * 50) - player.getY() + 25, this.w)
            // rectMode(CORNER)
        }
    }

    isColliding(){

        for(let i = 0; i < item.x.length; i++){
        
            if(player.isColliding(this.x[i] * 50, this.y[i] * 50, this.w, this.h)){

                this.pickUp()
            }
        }
    }

    pickUp(){

        this.x.splice(0,10);
        this.y.splice(0,10);
        this.rockA += 1;
    }    
}



