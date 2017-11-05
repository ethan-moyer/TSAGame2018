export class Debug extends Phaser.State {
    private cursors: Phaser.CursorKeys;
    private player: Phaser.Sprite;
    private walls: Phaser.TilemapLayer;
    private speed: number;
    // pSpawn: Phaser.Group;

    public preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }

    public create() {
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let map = this.game.add.tilemap("debug");
        map.addTilesetImage("placeHolder", "debug-tileset");

        this.walls = map.createLayer("Walls");
        this.walls.resizeWorld();
        map.setCollision(1, true, "Walls");
        this.game.physics.enable(this.walls);

        this.player = this.game.add.sprite(32, 96, "debug-player");
        this.game.physics.enable(this.player);
        this.player.body.collideWorldBounds = true;

        this.game.camera.follow(this.player);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.speed = 192;
    }

    public update() {
        this.game.physics.arcade.collide(this.player, this.walls);
        let velocity = this.player.body.velocity;
        velocity.set(0);
        if(this.cursors.up.isDown) {
            velocity.y -= this.speed;
        }
        else if(this.cursors.down.isDown) {
            velocity.y += this.speed;
        }
        if(this.cursors.left.isDown) {
            velocity.x -= this.speed;
        }
        else if(this.cursors.right.isDown) {
            velocity.x += this.speed;
        }
    }
}
