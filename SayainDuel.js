import { game, Sprite } from "./sgc/sgc.js";

game.setBackground("CellArena.jpg");

class PlayerSayian extends Sprite {
    constructor() {
        super();

        this.name = "Son Goku";

        this.setImage("Goku.png");

        this.width = 48;

        this.height = 48;

        this.x = this.width;

        this.y = this.height;

        //this.defineAnimation("down", 6, 8);

        //this.defineAnimation("up", 0, 2);

        //this.defineAnimation("right", 3, 5);

        this.speedWhenWalking = 100;


    }
    handleRightArrowKey() {

        //this.playAnimation("right");

        this.speed = this.speedWhenWalking;

        this.angle = 360;

    }
    handleLeftArrowKey() {
        //this.playAnimation("left");

        this.speed = this.speedWhenWalking;

        this.angle = 180;
    }
    handleSpacebar() {
      

            let ki = new Ki();

            ki.x = this.x; // this sets the position of the spell object equal to

            ki.y = this.y + this.height; // the position of any object created from the PlayerWizard class

            ki.name = "Turtle Devestation Wave";

            ki.setImage("Kamehameha.png");

            ki.angle = 270;

            //this.playAnimation("right");

        
    }








    handleGameLoop() {
        this.x = Math.max(5, this.x);

        this.x = Math.min(750, this.x);
    }

}


let goku = new PlayerSayian();

class Ki extends Sprite {
    constructor() {
        super();
        this.speed = 200;
        this.height = 48;
        this.width = 48;
        //this.defineAnimation("magic", 0, 7);
        //this.playAnimation("magic", true);
    }
    handleBoundaryContact() {
        //delete spell when it leaves display area
        game.removeSprite(this);
    }
    handleCollision(otherSprite) {
        // Compare images so Stranger's spells don't destroy each other.
        if (this.getImage() !== otherSprite.getImage()) {
            // Adjust mostly blank spell image to vertical center.
            let verticalOffset = Math.abs(this.y - otherSprite.y);
            if (verticalOffset < this.height / 2) {
                game.removeSprite(this);
                new Fireball(otherSprite);
            }
        }



        return false;
    }
}

class NonPlayerSayain extends Sprite {
    constructor() {
        super();
        this.name = "Vegeta Prince of All Sayains";
        this.setImage("VegetaSpriteSheet.png");
        this.width = 48;
        this.height = 48;
        this.x = 400;
        //game.displayWidth - 2 * this.width;
        this.y = 500;
        //this.height;
        this.angle = 180;
        this.speed = 150;
        //this.defineAnimation("up", 0, 2);
        //this.defineAnimation("left", 10, 12);
        //this.defineAnimation("down", 7, 8);
        //this.playAnimation("down");

    }
    handleGameLoop() {
        this.x = Math.max(this.x, 5);

        //this.x = Math.min(this.x, 750);

        if (this.x == 5) {

            // Upward motion has reached top, so turn down

            this.x = 5;

            this.angle = 360;

            //this.playAnimation("left");
        }

        if (this.x >= game.displayWidth - this.width) {

            // Downward motion has reached bottom, so turn up

            this.x = game.displayWidth - this.width - 10;

            this.angle = 180;

            // this.playAnimation("right");
        }
        if (Math.random() < 0.01) {
            let Pride = new Ki();

            Pride.x = this.x; // this sets the position of the spell object equal to

            Pride.y = this.y - this.height; // the position of any object created from the PlayerWizard class

            Pride.name = "FINAL FLASH!";

            Pride.setImage("FlashSheet.png");

            Pride.angle = 90;

            //this.playAnimation("left");
        }



    }






}

let Vegeta = new NonPlayerSayain();


class Fireball extends Sprite {
    constructor(deadSprite) {
        super();
        this.x = deadSprite.x;
        this.y = deadSprite.y;
        this.setImage("fireballSheet.png");
        this.name = "a ball of fire.";
        game.removeSprite(deadSprite);
        this.defineAnimation("explode", 0, 16);
        this.playAnimation("explode");

    }
    handleAnimationEnd() {
        game.removeSprite(this);
        if (!game.isActiveSprite(Vegeta)) {
            game.end("Im a Supah sayai...");

        }

    }
    handleAnimationEnd() {
        game.removeSprite(this);
        if (!game.isActiveSprite(goku)) {
            game.end("Goku got Yamcha'd");
        }
    }
}


//Kamehameha Beam Sprite PNG (200x100)
//https://www.roblox.com/library/226767170/Kamehameha-Beam-Sprite-PNG-200x100
//

//Legend Ivanhoe's Dragon Ball Z HD / HR Stages 
//http://mugenguild.com/forum/topics/legend-ivanhoes-dragon-ball-z-hd-hr-stages-161596.0.html



//Vegeta / Super Saiyan Vegeta (+84) by Belialhttp://www.sprites-unlimited.com/game/?code=DBZSB

//Ho Long
//https://www.pinterest.com/pin/460633868108890643/
