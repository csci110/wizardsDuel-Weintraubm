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

        this.speedWhenWalking = 100;


    }
    handleDownArrowKey() {

        this.playAnimation("down");

        this.speed = this.speedWhenWalking;

        this.angle = 270;

    }
    handlSpaceBar(){
        let spell;
        
        spell.x = this.x; // this sets the position of the spell object equal to

        spell.x = this.y; // the position of any object created from the PlayerWizard class
        
        spell.name = "A spell cast by Marcus";
        
        spell.setImage("marcusSpellSheet.png");
        
        spell.angle = 0;
        
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
}