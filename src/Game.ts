import * as States from "./States";

class Game extends Phaser.Game {
    constructor() {
        super(800, 600, Phaser.AUTO, "");
        this.antialias = false;
        this.state.add("Preloader", States.Preloader);
        this.state.add("Debug", States.Debug);
        this.state.add("Boot", States.Boot, true);
        this.state.start("Boot");
    }
}

(window as any).game = new Game();
