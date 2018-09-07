import { game, Sprite } from "./sgc/sgc.js";

game.setBackground("floor.png");
class PlayerWizard extends Sprite {
    constructor() {
        super();

        this.name = "Marcus the Wizard";

        this.setImage("marcusSheet.png");

        this.width = 48;

        this.height = 48;

        this.x = this.width;

        this.y = this.height;

        this.defineAnimation("down", 6, 8);

        this.defineAnimation("right", 3, 5);

        this.speedWhenWalking = 100;


    }
    handleDownArrowKey() {

        this.playAnimation("down");

        this.speed = this.speedWhenWalking;

        this.angle = 270;

    }
    handleSpacebar() {
        let spell = new Spell();

        spell.x = this.width; // this sets the position of the spell object equal to

        spell.y = this.y; // the position of any object created from the PlayerWizard class

        spell.name = "A spell cast by Marcus";

        spell.setImage("marcusSpellSheet.png");

        spell.angle = 0;

        this.playAnimation("right");

    }

    handleGameLoop() {
        this.y = Math.max(0, this.y);

        this.y = Math.min(552, this.y);
    }

}


let marcus = new PlayerWizard();

class Spell extends Sprite {
    constructor() {
        super();
        this.speed = 200;
        this.height = 48;
        this.width = 48;
        this.defineAnimation("magic", 0, 7);
        this.playAnimation("magic", true);
    }
    handleBoundaryContact() {
        //delete spell when it leaves display area
        game.removeSprite(this);
    }
}


class NonPlayerWizard extends Sprite {
    constructor() {
        super();
        this.name = "The mysterious stranger";
        this.setImage("strangerSheet.png");
        this.width = 48;
        this.height = 48;
        this.x = game.displayWidth - 2 * this.width;
        this.y = this.height;
        this.angle = 270;
        this.speed = 150;
        this.defineAnimation("up", 0, 3);
        this.defineAnimation("left", 10, 12);
        this.defineAnimation("down", 7, 9);
        this.playAnimation("down");

    }
    handleGameLoop() {
        this.y = Math.max(0, this.y);

        this.y = Math.min(552, this.y);
    }
    handleGameLoop() {
        if (this.y <= 0) {
    
            // Upward motion has reached top, so turn down
    
            this.y = 0;
    
            this.angle = 270;
    
            this.playAnimation("down");
    
        }
    
        if (this.y >= game.displayHeight - this.height) {
    
            // Downward motion has reached bottom, so turn up
    
            this.y = game.displayHeight - this.height;
    
            this.angle = 90;
    
            this.playAnimation("up");
        }
    }
    handleAnimationEnd() {
}

let stranger = new NonPlayerWizard();
