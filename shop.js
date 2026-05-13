class Shop {


    constructor(){

        this.x = 250
        this.y = 20
        this.w = 100
        this.h = 100
    }

    show(){

        rect(this.x - player.getX(), this.y - player.getY(), this.w, this.h)
    }

    isColliding(){

        if(player.isColliding(this.x, this.y, this.w, this.h)){

            if(keyCode === 13){

                rect(0,0, width, height)
                
                fill(0)
                text("Sell your rocks here", 120, 40)



            }  
        }
    }
}