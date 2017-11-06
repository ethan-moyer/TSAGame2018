export class Preloader extends Phaser.State {
    public preload() {
        // var bgg = this.game.add.sprite(148,  250, "preloadBarBg");
        // this.preloadBar = this.game.add.sprite(148,  250, "preloadBar");

        // this.load.setPreloadSprite(this.preloadBar);
        // this.load.spritesheet("cryopod", "./assets/cryopod.png", 25, 80);
        // this.load.audio("first", "./assets/sound/first.mp3");
        // this.load.tilemap('map', 'assets/Tile maps/Nova90.json', null, Phaser.Tilemap.TILED_JSON);
        this.load.tilemap("debug", "assets/debug-map.json", null, Phaser.Tilemap.TILED_JSON);
        this.load.image("debug-player", "assets/debug-player.png");
        this.load.image("debug-tileset", "assets/Tiles.png");
        this.load.spritesheet("playerSpritesheet", "assets/player.png", 20, 32, 12);
    }

    public create() {
        // this.add.tween(this.preloadBar).to({alpha: 0}, 1000, Phaser.Easing.Linear.None, true).onComplete.add(() => {
        //     this.game.state.start("titleScreen", true, false));
        // }
        this.game.renderer.renderSession.roundPixels = true        
        this.game.state.start("Debug");
    }
}
