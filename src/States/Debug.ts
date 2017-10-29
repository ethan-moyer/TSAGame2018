export class Debug extends Phaser.State {
    debug: Phaser.Sprite
    cursors: Phaser.CursorKeys;
    preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }
    
    create() {
        this.debug = this.add.sprite(this.game.world.centerX, this.game.world.centerY, "debug");
        this.debug.anchor.set(0.5, 0.5);

        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.up.isDown) {
            this.debug.visible = false;
        }
    }
}
