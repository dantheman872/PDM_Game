objectX = []
objectY = []
let i = 0;
let checkX = 0;
let checkY = 0;
let objAmount = 10;

function drawObject(){

    for(i = 0; i < objectX.length; i++){

        fill(50)
        rect(objectX[i] * 50- player.getX(), objectY[i] * 50 - player.getY(), 50)
        //fill(255)
        //text(i, objectX[i] - player.getX() + 25, objectY[i] - player.getY() +25)
    }
}

function spawnObjects(){

    while(i < objAmount){

        checkX = round(random(3,14)) 
        checkY = round(random(3,14)) 
        objectX.push(checkX)
        objectY.push(checkY)

        //console.log(checkX + " + " + checkY)

        grid.addToGrid(checkX, checkY)     
        
        i++                        
    }
}