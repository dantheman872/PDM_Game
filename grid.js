/**
 * Creates a grid for collision
 */
class Grid{
    
    constructor(){


    }

    /**
     * Fills the 2D grid with falses
     */
    fillGrid(){
        
        for(let i = 0; i < cols; i++){
            
            gridA[i] = []

            for (let j = 0; j < rows; j++){

                gridA[i][j] = false
            }
        }
    }

    /**
     * Checks if a specific grid index is occupied
     * @param {*} x - Index converted x coordinate
     * @param {*} y - Index converted y coordinate
     * @returns Condition of grid
     */
    isOccupied(x, y){
        
        return gridA[Math.floor(x)][Math.floor(y)]
    }

    /**
     * Turns grid index to true
     * @param {*} x - Index converted x coordinate
     * @param {*} y - Index converted y coordinate
     */
    addToGrid(x, y){

        gridA[x][y] = true       
    }

    /**
     * Turns grid index to false
     * @param {*} x - Index converted x coordinate
     * @param {*} y - Index converted y coordinate
     */
    removeFromGrid(x, y){

        gridA[x][y] = false
    }

    /**
     * Shows the grid as an overlay for debugging
     */
    show(){       

        //Cycles through all the grids
        for(let i = 0; i < gridA.length; i++){

            for(let j = 0; j < gridA.length; j++){

                //Shows the empty grids and index coordinates
                if(gridA[i][j] == false){

                    fill(100,100,100,100)
                    rect((i * 50) - player.getX(), (j * 50) - player.getY(), 50 )
                    fill(0)
                    text((i), (i * 50) - player.getX(), (j * 50) + 10 - player.getY())
                    text((j), (i * 50) + 25 - player.getX(), (j * 50) + 10 - player.getY())
                } else {

                    //Shows the full grids in red colour
                    fill(200,100,100,100)
                    rect((i * 50) - player.getX(), (j * 50) - player.getY(), 50)
                }
            }
        }       
    }
}
