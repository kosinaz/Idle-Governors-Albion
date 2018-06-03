var menuState = {

    create: function () {

        /**
         * Set the castle button
         */
        this.startNewGameButton = game.add.text(512, 288, 'Start New Game', {
            font: 'bold 30pt Arial',
            fill: '#000'
        });
        this.startNewGameButton.inputEnabled = true;
        this.startNewGameButton.events.onInputUp.add(this.start, this);
        this.startNewGameButton.anchor.set(0.5, 0.5);
        console.log(this.startNewGameButton.anchor);

    },
    
    start: function () {

        /**
         * Start the level.
         */
        game.state.start('play');
    },

    update: function () {

    }

};