objectX = []
objectY = []

let i = 0;
let health = 3;

let checkX = 0;
let checkY = 0;
let objAmount = 50;
let breaking = false

function drawObject(){

    for(i = 0; i < objectX.length; i++){

        fill(50)
        
        imageMode(CENTER)
        image(stone,(objectX[i] * 50 - player.getX()) + 25, (objectY[i] * 50 - player.getY()) +28, health, health)
        imageMode(CORNER)

        //rectMode(CENTER)
        //rect((objectX[i] * 50 - player.getX()) + 25, (objectY[i] * 50 - player.getY()) + 25, health/4)
        //rectMode(CORNER)
    }
    //console.log(health)
}

function spawnObjects(){

    
    
    while(i < 1){
        //console.log("spawning")
        checkX = Math.floor(random(3,14)) 
        checkY = Math.floor(random(3,14)) 
        objectX.push(checkX)
        objectY.push(checkY)

        
        grid.addToGrid(checkX, checkY)     
        
        health = 200  
        i++    
                          
    }
}

function breakObject(){

    
    health -= 1
    breaking = true

    if (health < 2){

        objectX.splice(0,10)
        objectY.splice(0,10)
        grid.removeFromGrid(checkX, checkY)
        item.spawn(checkX, checkY)
        i--

        spawnObjects();
        
        
        
        
    }
}