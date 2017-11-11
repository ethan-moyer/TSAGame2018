export class Player extends Phaser.Sprite {
    private speed: number;
    private lastKey: number;
    constructor(game: Phaser.Game, x: number, y: number) {
        super(game, x, y, "playerSpritesheet", 0);
        this.anchor.setTo(0.5, 0);
        this.animations.add('upAnim', [3,4,5], 5, true);
        this.animations.add('upIdle', [3], 5, true);
        this.animations.add('downAnim', [0,1,2], 5, true);
        this.animations.add('downIdle', [0], 5, true);
        this.animations.add('leftAnim', [9,10,11], 5, true);
        this.animations.add('leftIdle', [9], 5, true);
        this.animations.add('rightAnim', [6,7,8], 5, true);
        this.animations.add('rightIdle', [6], 5, true);
        game.physics.enable(this);
        this.body.collideWorldBounds = true;
        game.camera.follow(this);

        game.add.existing(this);
        this.speed = 192;
        this.lastKey = 2;
    }

    update() {
        this.game.physics.arcade.collide(this, (this.game.state.getCurrentState() as any).walls);
        let velocity = this.body.velocity;
        velocity.set(0);
        
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP) == false && this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN) == false && this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT) == false && this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT) == false) {
            this.animations.stop();
            if (this.lastKey == 1) {
                this.play("upIdle");
            }
            else if (this.lastKey == 2) {
                this.play("downIdle");
            }
            else if (this.lastKey == 3) {
                this.play("leftIdle");
            }
            else if (this.lastKey == 4) {
                this.play("rightIdle");
            }
        }

        if (this.game.input.keyboard.isDown(Phaser.Keyboard.UP)) {
            velocity.y -= this.speed;
            this.play("upAnim");
            this.lastKey = 1;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.DOWN)) {
            velocity.y += this.speed;
            this.play("downAnim");
            this.lastKey = 2;
        }
        if (this.game.input.keyboard.isDown(Phaser.Keyboard.LEFT)) {
            velocity.x -= this.speed;
            this.play("leftAnim");
            this.lastKey = 3;
        }
        else if (this.game.input.keyboard.isDown(Phaser.Keyboard.RIGHT)) {
            velocity.x += this.speed;
            this.play("rightAnim");
            this.lastKey = 4;
        }

        
            
    }
}