class Player {

    constructor(x, y, size){
        this.x = x;
        this.y = y;
        this.size = size;
        this.xDir = 0
        this.yDir = 0
    }

    show(){
        
        fill(220)
        rect(this.x, this.y, this.size);     
    }

    move(){
        
        this.x += this.xDir;
        this.y += this.yDir;
        backX -= this.xDir;
        backY -= this.yDir;
    }

    setXDir(xDir){

        this.xDir = xDir
    }

    setYDir(yDir){

        this.yDir = yDir
    }
}