 objectX = []
 objectY = []
 let i = 0;

function drawObject(){

    for(i = 0; i < objectX.length; i++){

        fill(50)
        rect(round(objectX[i]) * 50, round(objectY[i]) * 50, 50)
    }
}

function spawnObjects(){

    while(i < 10){

        objectX.push(random(2,10))
        objectY.push(random(2,10))
        i++
    }
}