export class Debug extends Phaser.State {
    debug: Phaser.Sprite;
    cursors: Phaser.CursorKeys;
    map: Phaser.Tilemap;
    // pSpawn: Phaser.Group;

    preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }
    
    create() {
        this.map = this.game.add.tilemap("debug");
        this.map.addTilesetImage("placeHolder", "debug-tileset");
        this.map.createLayer("Background");
        this.map.createLayer("Walls");
        // this.pSpawn = this.game.add.group();
        // this.map.createFromObjects("Entities", 2, "", 0, true, false, this.pSpawn);
        this.cursors = this.game.input.keyboard.createCursorKeys();
    }

    update() {
        if (this.cursors.up.isDown) {
            console.log("up!");
        }
    }
}
