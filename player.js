class Player {

    constructor(x, y, r){
        this.x = x;
        this.y = y;
        this.r = r;
        this.xDir = 0
        this.yDir = 0
    }

    show(){
        
        rect(this.x, this.y, this.r);     
    }

    move(){

        backX -= this.xDir
        backY -= this.yDir
    }

    setXDir(xDir){

        this.xDir = xDir
    }

    setYDir(yDir){

        this.yDir = yDir
    }
}

