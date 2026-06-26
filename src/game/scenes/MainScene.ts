import Phaser from 'phaser';

export default class MainScene extends Phaser.Scene {
  private player?: Phaser.GameObjects.Rectangle;
  private cursors?: Phaser.Types.Input.Keyboard.CursorKeys;

  constructor() {
    super('MainScene');
  }

  preload() {
    // We can load pixel art sprites here later
  }

  create() {
    // Simple placeholder player
    this.player = this.add.rectangle(400, 300, 32, 32, 0xffd600); // Yellow square (bg-sun)
    
    // Add physics to player
    this.physics.add.existing(this.player);
    const body = this.player.body as Phaser.Physics.Arcade.Body;
    body.setCollideWorldBounds(true);
    
    // Setup cursors
    if (this.input.keyboard) {
      this.cursors = this.input.keyboard.createCursorKeys();
    }

    // Add some ambient particles or text
    this.add.text(10, 10, 'Use Arrow Keys to Move', { 
      fontFamily: 'monospace', 
      color: '#ffffff' 
    }).setAlpha(0.5);
  }

  update() {
    if (!this.player || !this.cursors) return;

    const body = this.player.body as Phaser.Physics.Arcade.Body;
    const speed = 200;

    body.setVelocity(0);

    if (this.cursors.left.isDown) {
      body.setVelocityX(-speed);
    } else if (this.cursors.right.isDown) {
      body.setVelocityX(speed);
    }

    if (this.cursors.up.isDown) {
      body.setVelocityY(-speed);
    } else if (this.cursors.down.isDown) {
      body.setVelocityY(speed);
    }
  }
}
