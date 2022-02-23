/* global Phaser */

class MainScene extends Phaser.Scene {
  constructor() {
    super({ key: "mainScene" });
  }

  init(data) {
    this.cameras.main.setBackgroundColor("ffffff");
  }

  preload() {
    console.log("main scene");
  }

  create(data) {}

  update(time, delta) {}
}

export default MainScene;
