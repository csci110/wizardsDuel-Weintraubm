import { game, Sprite } from "./sgc/sgc.js";

game.setBackground("CellArena.png");

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
    handleRigthArrowKey() {

        //this.playAnimation("right");

        this.speed = this.speedWhenWalking;

        this.angle = 360;

    }
    handleUpArrowKey() {
        //this.playAnimation("left");

        this.speed = this.speedWhenWalking;

        this.angle = 180;
    }
    handleSpacebar() {
        let ki = new Ki();

        ki.x = this.x + this.width; // this sets the position of the spell object equal to

        ki.y = this.y; // the position of any object created from the PlayerWizard class

        ki.name = "Turtle Devestation Wave";

        ki.setImage("Kamehameha.png");

        ki.angle = 0;

        this.playAnimation("right");

        let now = game.getTime(); // get the number of seconds since game start

        if (now - this.spellCastTime >= 2) {
            this.spellCastTime = now;
        }





    }

    handleGameLoop() {
        this.y = Math.max(5, this.y);

        this.y = Math.min(552, this.y);
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
        this.x = game.displayWidth - 2 * this.width;
        this.y = this.height;
        this.angle = 180;
        this.speed = 150;
        //this.defineAnimation("up", 0, 2);
        //this.defineAnimation("left", 10, 12);
        //this.defineAnimation("down", 7, 8);
        //this.playAnimation("down");

    }
    handleGameLoop() {
        this.y = Math.max(this.y, 0);

        this.y = Math.min(this.x, 800);

        if (this.y <= 0) {

            // Upward motion has reached top, so turn down

            this.y = 0;

            this.angle = 180;

            //this.playAnimation("left");
        }

        if (this.y >= game.displayWidth - this.width) {

            // Downward motion has reached bottom, so turn up

            this.y = game.displayWidth - this.width;

            this.angle = 360;

            // this.playAnimation("right");
        }
        if (Math.random() < 0.01) {
            let Pride = new Ki();

            Pride.x = this.x - this.width; // this sets the position of the spell object equal to

            Pride.y = this.y; // the position of any object created from the PlayerWizard class

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
        //this.defineAnimation("explode", 0, 16);
        //this.playAnimation("explode");

    }
    handleAnimationEnd() {
        game.removeSprite(this);
        if (!game.isActiveSprite(stranger)) {
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
