import { Player } from "./Player"

export class Debug extends Phaser.State {
    private cursors: Phaser.CursorKeys;
    private player: Player;
    private background: Phaser.TilemapLayer;
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

        this.background = map.createLayer("Background");
        this.walls = map.createLayer("Walls");
        this.walls.resizeWorld();
        map.setCollision(1, true, "Walls");
        this.game.physics.enable(this.walls);

        this.player =new Player(this.game, 64, 96);
        this.cursors = this.game.input.keyboard.createCursorKeys();

        this.speed = 192;
    }

    public update() {
        this.game.physics.arcade.collide(this.player, this.walls);
        let velocity = this.player.body.velocity;
        velocity.set(0);
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            velocity.y -= this.speed;
            this.player.play("upAnim");
        }
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            velocity.y += this.speed;
            this.player.play("downAnim");
        }
        if(this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            velocity.x -= this.speed;
            this.player.play("leftAnim");
        }
        else if(this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            velocity.x += this.speed;
            this.player.play("rightAnim");
        }
    }
}
