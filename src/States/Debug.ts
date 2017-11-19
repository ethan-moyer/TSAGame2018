import { Player } from "./Player"
import { Enemy1 } from "./Enemy1"
export class Debug extends Phaser.State {
    private cursors: Phaser.CursorKeys;
    private player: Player;
    private enemy1: Enemy1;
    private enemy1Sight: Phaser.Sprite;
    private background: Phaser.TilemapLayer;
    private walls: Phaser.TilemapLayer;
    // pSpawn: Phaser.Group;

    public preload() {
        
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
        this.enemy1 = new Enemy1(this.game, 208, 512);
        this.enemy1Sight = this.game.add.sprite(32, 528, "enemySight");
        this.enemy1Sight.renderable = false;
    }

    public update() {
        if (this.checkOverlap(this.player, this.enemy1Sight)) {
            console.log("Collision");
        }

    }

    public checkOverlap(A, B) {
        var boundsA = A.getBounds();
        var boundsB = B.getBounds();
    
        return Phaser.Rectangle.intersects(boundsA, boundsB);
    }
}
