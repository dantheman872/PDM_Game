class Shop {


    constructor(){

        this.x = 200
        this.y = 20
        this.w = 100
        this.h = 100
    }

    show(){

        rect(this.x - player.getX(), this.y - player.getY(), this.w, this.h)
    }

    // isColliding(){

    //     if(this.x + width/2 - (player.getX()) < 35 && this.x + width/2 - (item.x[i] * 50) > -35
    //             && this.y + height/2 - (item.y[i] * 50) < 35 && this.y + height/2 - (item.y[i] * 50) > -35){

    //             item.pickUp()
    //         }
    // }
}