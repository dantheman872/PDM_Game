class xP{

    constructor(alive){

        this.x 
        this.y 
        this.dirX
        this.dirY
        this.alive = alive
    }

    show(){

        fill(200,200,100)
        circle(this.x, this.y, 10)
    }

    move(){

       // this.x += this.dirX
       // this.y += this.dirY
    }

    spawn(){

        this.x = player.getX()
        this.y = player.getY()
        //this.dirX = random(-2,2)
        //this.dirY = random(-2,2)
        this.alive = true
    }

    moveToPlayer(){

        if(this.x > (player.getX() + width/2 - player.getX())){

            this.x--
        } else {

            this.x++
        }
        
        if(this.y > (player.getY() + height/2 - player.getY())){

            this.y--
        } else {

            this.y++
        }

    }

    pickUp(){

        if(this.x = player.getX() + width/2 + player.getX() && this.alive == true){

            background(120)
        }
    }
}