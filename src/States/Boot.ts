export class Boot extends Phaser.State {
    public preload() {
        // this.load.image("preloadBar", "./assets/startbar.png");
        // this.load.image("preloadBarBg", "./assets/prloadBar.png");
    }

    public create() {
        this.input.maxPointers = 1;
        this.stage.disableVisibilityChange = true;

        this.scale.pageAlignHorizontally = true;
        this.scale.pageAlignVertically = true;
        console.log(this.scale.width);
        this.scale.scaleMode = Phaser.ScaleManager.NO_SCALE;

        console.log(this.game);
        this.game.state.start("Preloader", true, false);
    }
}
