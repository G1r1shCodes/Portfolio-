import Phaser from 'phaser';
import MainScene from './scenes/MainScene';

export const config: Phaser.Types.Core.GameConfig = {
  type: Phaser.AUTO,
  parent: 'phaser-container',
  backgroundColor: '#000000',
  transparent: true, // Allow HTML background to show through
  scale: {
    mode: Phaser.Scale.RESIZE,
    width: '100%',
    height: '100%',
  },
  physics: {
    default: 'arcade',
    arcade: {
      gravity: { x: 0, y: 0 },
      debug: false
    }
  },
  pixelArt: true, // Essential for crisp pixel art rendering
  scene: [MainScene]
};
