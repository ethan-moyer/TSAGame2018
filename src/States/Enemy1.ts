export class Enemy1 extends Phaser.Sprite {
    static speed: number = 192;
    private lastKey: number;
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "debug-player", 0);
        this.anchor.setTo(0.5, 0);
        game.physics.enable(this);
        this.body.collideWorldBounds = true;
        this.body.immovable = true;
        game.add.existing(this);
    }

    update() {
    }
}