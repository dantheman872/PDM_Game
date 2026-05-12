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
        console.log(gridA)
    }

    isOccupied(x, y){

        // if(x < 0 || x >= width || y < 0 || y > height){

        //     console.log("wall")
        //     return true            
        // }

        //console.log(gridA[x][y])
        
        return gridA[round(x)][round(y)]
    }

    addToGrid(x, y){

        gridA[x][y] = true   
        //console.log(gridA[x][y])
        
    }

    #getIndexOfCoords(){


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
}