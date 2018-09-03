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

}

let marcus = new PlayerWizard();

