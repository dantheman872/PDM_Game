objectX = []
objectY = []

let i = 0;
let health = 2;

let checkX = 0;
let checkY = 0;
let objAmount = 50;

function drawObject(){

    for(i = 0; i < objectX.length; i++){

        fill(50)
        rect(objectX[i] * 50- player.getX(), objectY[i] * 50 - player.getY(), 50)
    }
}

function spawnObjects(){

    
    while(i < 1){

        checkX = Math.floor(random(3,14)) 
        checkY = Math.floor(random(3,14)) 
        objectX.push(checkX)
        objectY.push(checkY)

        health = 100
        grid.addToGrid(checkX, checkY)     
        
        i++                        
    }
}

function breakObject(){

    //console.log("breakable" + health + objectX)

    
    health -= 1
    

    if (health < 0){

        objectX.splice(0,10)
        objectY.splice(0,10)
        spawnObjects();
       


    }
}