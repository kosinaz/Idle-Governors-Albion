var playState = {

    create: function () {

        this.resources = {
            food: new Resource(0, 'icon food.png'),
            cloth: new Resource(1, 'icon cloth.png'),
            lumber: new Resource(2, 'icon lumber.png'),
            clay: new Resource(3, 'icon clay.png'),
            stone: new Resource(4, 'icon stone.png'),
            coal: new Resource(5, 'icon coal.png'),
            iron: new Resource(6, 'icon iron.png'),
            silver: new Resource(7, 'icon silver.png'),
            gold: new Resource(8, 'icon gold.png'),
            diamond: new Resource(9, 'icon diamond.png')
        };
        game.add.tileSprite(32, 48, 48, 48, 'sprites', 'button sell one.png');
        game.add.tileSprite(80, 48, 48, 48, 'sprites', 'button sell all.png');

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
        
    },

    update: function () {  

    },

    mine: function () {
        this.resources.food.add(1);
    }
}

/** Class representing an icon and a name of a resource type. */
class Resource {

    /**
     * Create a resource label.
     * @param {number} i The index of the label in the list of labels.
     * @param {string} sprite The name of the sprite. e.g. 'food.png'
     */
    constructor(i, sprite) {
        var qty, label;
        game.add.tileSprite(i * 96 + 32, 16, 32, 32, 'sprites', sprite);
        qty = 0;
        label = game.add.text(0, 0, qty, {
            boundsAlignH: 'left',
            boundsAlignV: 'middle',
            fill: '#fff',
            font: 'bold 16pt Arial'
        });
        label.setTextBounds(i * 96 + 68, 20, 60, 28);
        this.add = function (n) {
            qty += n;
            label.text = qty;
        }
    }

}
