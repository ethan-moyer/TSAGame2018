export class Debug extends Phaser.State {
    debug: Phaser.Sprite

    preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }
    
    create() {
        this.debug = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "debug");
        this.debug.anchor.set(0.5, 0.5);
    }
}
