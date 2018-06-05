var playState = {

    create: function () {
        console.log(this);

        this.sellEverything = function () {
            for (resource in this.resources) {
                if (this.resources[resource].salable) {
                    this.resources[resource].sellAll();
                }
            };
        }.bind(this);
        this.resources = {
            coin: new Resource(0, 'icon coin.png', false),
            food: new Resource(1, 'icon food.png'),
            cloth: new Resource(2, 'icon cloth.png'),
            lumber: new Resource(3, 'icon lumber.png'),
            clay: new Resource(4, 'icon clay.png'),
            stone: new Resource(5, 'icon stone.png'),
            coal: new Resource(6, 'icon coal.png'),
            iron: new Resource(7, 'icon iron.png'),
            silver: new Resource(8, 'icon silver.png'),
            gold: new Resource(9, 'icon gold.png'),
            diamond: new Resource(10, 'icon diamond.png')
        };

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
     * @param {boolean} [salable=true] True, if the resource can be sold for coin.
     */
    constructor(i, sprite, salable, sellEverything) {
        var buttonSellOne, buttonSellAll, qty, value, label;
        if (salable === undefined) {
            this.salable = true;
        }
        this.add = function (n) {
            qty += n;
            label.text = qty;
        };
        this.sellOne = function () {
            if (qty < 1) {
                return;
            }
            playState.resources.coin.add(value);
            qty -= 1;
            label.text = qty;
        };
        this.sellAll = function () {
            if (qty < 1) {
                return;
            }
            playState.resources.coin.add(value * qty);
            qty = 0;
            label.text = qty;
        };
        game.add.tileSprite(888, (i + 1) * 48 + 8, 32, 32, 'sprites', sprite);
        if (this.salable) {
            buttonSellOne = game.add.tileSprite(
                928, 
                (i + 1) * 48,
                48, 
                48, 
                'sprites', 
                'button sell one.png'
            );
            buttonSellOne.inputEnabled = true;
            buttonSellOne.events.onInputUp.add(this.sellOne, this);
            buttonSellAll = game.add.tileSprite(
                976, 
                (i + 1) * 48,
                48, 
                48, 
                'sprites', 
                'button sell all.png'
            );
            buttonSellAll.inputEnabled = true;
            buttonSellAll.events.onInputUp.add(this.sellAll, this);
        } else {
            buttonSellAll = game.add.tileSprite(
                976,
                (i + 1) * 48,
                48,
                48,
                'sprites',
                'button sell everything.png'
            );
            buttonSellAll.inputEnabled = true;
            buttonSellAll.events.onInputUp.add(playState.sellEverything, this);
        }
        qty = 0;
        value = i + 1;
        label = game.add.text(0, 0, qty, {
            boundsAlignH: 'right',
            boundsAlignV: 'middle',
            fill: '#fff',
            font: 'bold 16pt Arial'
        });
        label.setTextBounds(800, (i + 1) * 48 + 12, 80, 28);
    }

}
