export class Debug extends Phaser.State {
    private cursors: Phaser.CursorKeys;
    private player: Phaser.Sprite;
    private walls: Phaser.TilemapLayer;
    private speed: number;
    private upAnim: Phaser.Animation;
    private downAnim: Phaser.Animation;
    private leftAnim: Phaser.Animation;
    private rightAnim: Phaser.Animation;
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

        this.player = this.game.add.sprite(32, 96, "playerSpritesheet");
        this.upAnim = this.player.animations.add('upAnim', [3,4,5], 5, true);
        this.downAnim = this.player.animations.add('downAnim', [0,1,2], 5, true);
        this.leftAnim = this.player.animations.add('leftAnim', [9,10,11], 5, true);
        this.rightAnim = this.player.animations.add('rightAnim', [6,7,8], 5, true);

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
            this.player.play("upAnim");
        }
        else if(this.cursors.down.isDown) {
            velocity.y += this.speed;
            this.player.play("downAnim");
        }
        if(this.cursors.left.isDown) {
            velocity.x -= this.speed;
            this.player.play("leftAnim");
        }
        else if(this.cursors.right.isDown) {
            velocity.x += this.speed;
            this.player.play("rightAnim");
        }
    }
}
