/* global Phaser */

import MainScene from "./mainScene.js";

const config = {
  type: Phaser.Auto,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  backgroundColor: 0x5f6e7a,
  scale: {
    mode: Phaser.Scale.Fit,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },
};

const game = new Phaser.Game(config);

game.scene.add("mainScene", mainScene);
game.scene.start("mainScene");
