export class Player extends Phaser.Sprite {
    private speed: number;
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "playerSpritesheet", 0);
        this.anchor.setTo(0.5, 0);
        this.animations.add('upAnim', [3,4,5], 5, true);
        this.animations.add('downAnim', [0,1,2], 5, true);
        this.animations.add('leftAnim', [9,10,11], 5, true);
        this.animations.add('rightAnim', [6,7,8], 5, true);
        game.physics.enable(this);
        this.body.collideWorldBounds = true;
        game.camera.follow(this);

        game.add.existing(this);
    }

    update() {
        
    }
}