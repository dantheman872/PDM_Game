objectX = []
objectY = []
let i = 0;
let checkX = 0;
let checkY = 0;
let objAmount = 5;

function drawObject(){

    for(i = 0; i < objectX.length; i++){

        fill(50)
        rect(objectX[i], objectY[i], 50)
        fill(255)
        text(i, objectX[i] +25, objectY[i] +25)
    }
}

function spawnObjects(){

    while(i < objAmount){

        checkX = round(random(1,5)) * 50
        checkY = round(random(1,5)) * 50

        if ((!objectX.includes(checkX)) && (!objectY.includes(checkY))){

            objectX.push(checkX)
            objectY.push(checkY)
            i++
            
        }                   
    }
}