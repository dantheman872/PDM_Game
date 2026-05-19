class Shop {

    constructor(){

        this.x = 250
        this.y = -20
        this.w = 180
        this.h = 180
    }

    /**
     * Displays the image of the shop and the keeper
     */
    show(){

        image(shopImage, this.x - player.getX(), this.y - player.getY(), this.w, this.h)  
        image(shopkeeper, this.x - player.getX() + 150, this.y - player.getY() + 20, this.w * 3/4, this.h * 3/4) 

    }

    /**
     * 
     * @returns True if the player is within bounds of the shop
     */
    isColliding(){

        if(player.isColliding(this.x, this.y + 50, this.w, this.h)){

            textAlign(CENTER)
            textSize(20)
            
            if(keyCode === 13){

                if(item.rockA < 10){

                    image(furnaceRoom, -50, -150, width + 200, height + 200)
                    image(shopkeeper, width - 200, height - 250, 300, 300)
                    fill(200, 200, 100)
                    rect(width * 0.4, height - 115, 200, 90, 10, 10, 10, 10)
                    fill(0)
                    text("Hello Dwarf, I need " + (10 - item.rockA) + " more stones to fix the furnace", width * 0.4, height - 90, 200, 100)
                } else {

                    background(200,200,100)
                    imageMode(CENTER)
                    textAlign(CENTER)
                    image(furnace, width/2, height/2, furnace.width * 1.6, furnace.height * 1.6)
                    fill(32, 44, 120)
                    text("Congratulations you`ve upgraded the furnace", width/2, 100)
                    text("Press R to replay", width/2, 120)

                    angle += 3
                    this.drawStar(350, 400, -1)
                    this.drawStar(400,300, 1)
                    this.drawStar(100, 300, 1.25)
                    this.drawStar(150, 400, -0.75)
                }
            

            }  else {

                textAlign(CENTER)
                textSize(20)
                text("Press Enter to forge", width/2, width/2)
            }

            return true
        }
    }

    drawStar(x, y, a){

        push()
        rectMode(CENTER)
        noStroke()
        translate(x, y)
        rotate(angle * a)

        beginShape()

            vertex(12,36);
            vertex(12,8)
            vertex(38, 0);
            vertex(12,-8);
            vertex(12,-36);
            vertex(-5,-14);
            vertex(-32,-22);
            vertex(-14,0);
            vertex(-32,22);
            vertex(-4,14);
                    
        endShape(CLOSE)

        pop()
    }
}