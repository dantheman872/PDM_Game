class Grid{
    
    constructor(){


    }

    fillGrid(){

        
        for(let i = 0; i < cols; i++){
            
            gridA[i] = []

            for (let j = 0; j < rows; j++){

                gridA[i][j] = false
            }
        }
    }

    isOccupied(x, y){
        
        return gridA[Math.floor(x)][Math.floor(y)]
    }

    addToGrid(x, y){

        gridA[x][y] = true       
    }

    show(){       

        for(let i = 0; i < gridA.length; i++){

            for(let j = 0; j < gridA.length; j++){

                if(gridA[i][j] == false){

                    fill(100,100,100,100)
                    rect((i * 50) - player.getX(), (j * 50) - player.getY(), 50 )
                } else {

                    fill(200,100,100,100)
                    rect((i * 50) - player.getX(), (j * 50) - player.getY(), 50)
                }
            }
        }       
    }

    indexToCoord(x, y){

        
    }

    coordToIndex(x, y){


    }
}
