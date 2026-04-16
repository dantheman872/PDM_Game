function setup(){

    createCanvas(800, 600)
    player = new Player();
    
}

let state = IDLE

function draw(){

    background(220);
    switch (state) {

        case IDLE:
            player.drawIdle();
            break;
        
        case PLAYING:
            player.draw();
           break;
        
    }
}

function keyPressed(){

    switch(keyCode) {

        case LEFT_ARROW:
            player.setXSpeed(-5);
            break;
        case RIGHT_ARROW:
            player.aet
    }
}