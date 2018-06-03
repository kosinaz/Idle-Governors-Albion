var playState = {

    create: function () {

        /**
         * Set the castle button
         */
        this.castleButton = game.add.tileSprite(
            480,
            256,
            64,
            64,
            'sprites',
            'castle.png'
        );
        this.castleButton.inputEnabled = true;
        this.castleButton.events.onInputUp.add(this.mine, this);

        /**
         * Set the coin label
         */
        this.coinImage = game.add.tileSprite(
            0,
            0,
            32,
            32,
            'sprites',
            'coin.png'
        );
        this.coinLabel = game.add.text(32, 0, '0', {
            font: 'bold 16pt Arial',
            fill: '#000'
        });

        /**
         * Set the food label
         */
        this.food = 0
        this.foodLabel = game.add.tileSprite(
            96,
            0,
            32,
            32,
            'sprites',
            'food.png'
        );
        this.foodLabel = game.add.text(128, 0, this.food, {
            font: 'bold 16pt Arial',
            fill: '#000'
        });
        
    },

    update: function () {        
        this.foodLabel.text = this.food;
    },

    mine: function () {
        this.food += 1;
    }
}