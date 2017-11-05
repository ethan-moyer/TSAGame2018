export class Debug extends Phaser.State {
    debug: Phaser.Sprite;
    cursors: Phaser.CursorKeys;
    map: Phaser.Tilemap;
    player: Phaser.Sprite;
    layer: Phaser.TilemapLayer;
    // pSpawn: Phaser.Group;

    preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }
    
    create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);        
        this.map = this.game.add.tilemap("debug");
        this.map.addTilesetImage("placeHolder", "debug-tileset");
        this.map.createLayer("Background");
        this.layer = this.map.createLayer("Walls");
        this.map.setCollisionBetween(1,2,true,this.layer);
        
        // this.pSpawn = this.game.add.group();
        // this.map.createFromObjects("Entities", 2, "", 0, true, false, this.pSpawn);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.player = this.game.add.sprite(32, 64, 'player');
        this.game.physics.enable(this.player);
        this.game.physics.arcade.gravity.y = 250;
        this.player.body.collideWorldBounds = true;
    }

    update() {
        this.game.physics.arcade.collide(this.player, this.layer);
        if (this.cursors.up.isDown) {
            console.log("up!");
        }
    }
}
