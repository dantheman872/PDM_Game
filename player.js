class Player {

    #x
    #y
    #size
    #dirX
    #dirY

    constructor(x, y, size, dirY, dirX){

        this.#x = x
        this.#y = y
        this.#size = size
        this.#dirY = dirY
        this.#dirX = dirX
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

    getDir(){

        return this.#dirX + this.#dirY
    }

    draw(){

        rect(this.#x, this.#y, this.#size, this.#size)
    }

    move(){

        this.#x += this.#dirX;
        this.#y += this.#dirY;
    }

    keyPressed(){

        if(key === "w"){

            this.#dirY = -1
        }

        if(key === "s"){

            this.#dirY = 1
        }

        if(key === "a"){

            this.#dirX = -1
        }

        if(key === "d"){

            this.#dirX = 1
        }
    }
}