/* global Phaser */

const config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  physics: {
    default: 'arcade',
    arcade: {
      debug: true
    }
  },
  backgroundColor: 0X5f6e7a,
  scale: {
    mode: Phaser.Scale.Fit,
    autoCenter: Phaser.Scale.CENTER_BOTH
  }
}

const game = new Phaser.Game(config)
console.log(game)
