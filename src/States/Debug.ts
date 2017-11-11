import { Player } from "./Player"

export class Debug extends Phaser.State {
    private cursors: Phaser.CursorKeys;
    private player: Player;
    private background: Phaser.TilemapLayer;
    private walls: Phaser.TilemapLayer;
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
    }

    public update() {

    }
}
