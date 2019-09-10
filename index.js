
var config = {
    type: Phaser.AUTO,
    width: 2000,
    height: 1600,
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 1000 }
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: update
    }
};


var game = new Phaser.Game(config);
var frameCounter = 0;

function preload() {

    this.load.setBaseURL('http://labs.phaser.io');

    this.load.image('phaser', 'assets/particles/blue.png');
}

var sprite;
var cursors;


function create() {

  
    // this.body = scene.add.group();

    // this.head = this.body.create(x * 16, y * 16, 'body');
    // this.head.setOrigin(0);

    // //  Update the body segments
    // Phaser.Actions.ShiftPosition(this.body.getChildren(), this.dot.x * 16, this.dot.y * 16, 1);

    // //  Update the timer ready for the next movement
    // this.moveTime = time + this.speed;



    sprite = this.add.sprite(300, 300, 'phaser');
    // sprite.CollideWorldBounds=true


    cursors = this.input.keyboard.addKeys(
        {
            up: Phaser.Input.Keyboard.KeyCodes.UP,
            down: Phaser.Input.Keyboard.KeyCodes.DOWN,
            left: Phaser.Input.Keyboard.KeyCodes.LEFT,
            right: Phaser.Input.Keyboard.KeyCodes.RIGHT
        });
}


function update() {
    // moveSnake()

    if (cursors.up.isDown) {
        sprite.y--;
    }
    else if (cursors.down.isDown) {
        sprite.y++;
    }

    if (cursors.left.isDown) {
        sprite.x--;
    }
    else if (cursors.right.isDown) {
        sprite.x++;
    }
}
//     if (cursors.up.isDown && direction !== 'down') {
//         direction = 'up';
//     } else if (cursors.down.isDown && direction !== 'up') {
//         direction = 'down';
//     } else if (cursors.left.isDown && direction !== 'right') {
//         direction = 'left';
//     } else if (cursors.right.isDown && direction !== 'left') {
//         direction = 'right';
//     }

//     if (updateCount % 50 === 0) {
//         moveSnake();
//     }
//     updateCount += 1;
// }

//     function moveSnake() {
//         sprite.x = 0;
//         sprite.y = 0;


//         switch (direction) {
//             case 'up': sprite.y = -2; break;
//             case 'down': sprite.y = 2; break;
//             case 'left': sprite.x = -2; break;
//             case 'right': sprite.x = 2; break;
//         }
//     }






  