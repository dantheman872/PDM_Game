function setup(){

    createCanvas(600,600)
    player = new Player(200,100,200)
}

function draw(){
    
    player.draw()
    player.changeDir()
    text(player.dirX, 10, 20)
}