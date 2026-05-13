class Item {

    constructor(){

        this.x = []
        this.y = []
        this.w = 20
    }

    spawn(x, y){

        this.x.push(x)
        this.y.push(y)
        
 
        //console.log(this.x)
    }

    show(){

        for(let i = 0; i < this.x.length; i++){
            rectMode(CENTER)
            rect((this.x[i] * 50) - player.getX() + 25, (this.y[i] * 50) - player.getY() + 25, this.w)
            rectMode(CORNER)
        }
    }

    isColliding(x, y, w){

        for(let i = 0; i < this.x.length; i++){

            console.log((this.x[i] * 50) + "," + (this.y[i] * 50) + " " + x + "," + y)
            //console.log(x)


            //console.log((x + w) + " <= " + (((this.x[i] * 50) + this.w) + 25 - (this.w /2)))
            //console.log(x + " >= " + (((this.x[i] * 50) - 25) - (this.w/2)))
            //console.log((y + w) + " <= " + (((this.y[i]) * 50)  + 15 + this.w))
            //console.log(y >= this.y[i])
            
        }
    }      
}