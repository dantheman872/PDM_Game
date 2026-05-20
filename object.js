//Sets up an array for each coordinate
objectX = []
objectY = []

//Starts the objects at zero
let stoneA = 0;
let health = 0;
let nextX = 0;
let nextY = 0;
let breaking = false

/**
 * Draws the objects
 */
function drawObject(){

    for(j = 0; j < objectX.length; j++){

        imageMode(CENTER)
        image(stone,(objectX[j] * 50 - player.getX()) + 25, (objectY[j] * 50 - player.getY()) +28, health, health)
        imageMode(CORNER)
    }
}

/**
 * Resets the objects data and sets new location
 */
function spawnObjects(){

    while(stoneA < 1){
        nextX = Math.floor(random(4,13)) 
        nextY = Math.floor(random(4,13)) 
        objectX.push(nextX)
        objectY.push(nextY)
        grid.addToGrid(nextX, nextY)     
        
        health = 200  
        stoneA++                              
    }
}

/**
 * Reduces rock health and removes rock when finished
 */
function breakObject(){

    health -= 1
    breaking = true

    if (health < 2){

        objectX.splice(0,10)
        objectY.splice(0,10)
        grid.removeFromGrid(nextX, nextY)
        item.spawn(nextX, nextY)
        stoneA--
        spawnObjects();       
    }
}