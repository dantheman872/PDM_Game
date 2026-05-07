class Grid{
    
    constructor(){


    }

    isOccupied(){


    }

    addToGrid(){

        
    }

    #getIndexOfCoords(){


    }

    show(){

        stroke(3)
        fill(100,100,100,100)

        for(let i = 0; i < 10; i++){

            for(let o = 0; o < 10; o++){

                rect(i * 50, o * 50, 50)
            }
        }

        for(let j = 0; j < objectX.length; j++){

            stroke(3)
            fill(200,100,100,100)
            rect(objectX[j], objectY[j], 50)
        }
    }
}