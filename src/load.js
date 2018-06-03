var loadState = {
    preload: function () {

        /**
         * Set the background color.
         */
        game.stage.backgroundColor = "#0084c8";

        this.clock = game.add.text(0, 0, '⏳', {
            boundsAlignH: "center",
            boundsAlignV: "middle",
            fill: '#fff',
            font: 'bold 30pt Arial',
            align: "center"
        });
        this.clock.setTextBounds(0, 0, 1024, 576);
        this.hour = 0;

        game.time.events.loop(Phaser.Timer.SECOND, this.updateClock, this);

        /**
         * Load the images.
         */ 
        game.load.atlas('sprites', 'assets/sprites.png', 'data/sprites.json');

    },
    
    create: function () {
        game.state.start('menu');    
    },

    updateClock: function () {
        this.hour = (this.hour + 1) % 2;
        this.clock.text = '⏳⌛'[this.hour];
    }
};