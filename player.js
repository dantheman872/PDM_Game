class Player {

    #x
    #y
    #size
    #image
    #dir

    constructor(x, y, size, dir){

        this.#x = x
        this.#y = y
        this.#size = size
        this.#dir = dir
    }

    /**
     * Gets the x coordinate
     * @returns {number}
     */
    getX(){
        
        return this.#x;
    }

    getY(){

        return this.#y;
    }

    draw(){

        this.#body();
    }

    move(dirX, dirY){

        this.#x += dirX;
        this.#y += dirY;
    }


}