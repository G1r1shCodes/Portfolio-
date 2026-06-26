'use client';
import { useEffect, useRef } from 'react';

export default function PhaserGame() {
  const gameRef = useRef<any>(null); // We use any here to avoid importing Phaser type at the top level for SSR

  useEffect(() => {
    let isMounted = true;

    async function initPhaser() {
      if (gameRef.current) return;
      
      // Dynamically import Phaser and config to prevent SSR issues
      const Phaser = (await import('phaser')).default;
      const { config } = await import('@/game/config');
      
      if (!isMounted) return;

      gameRef.current = new Phaser.Game({
        ...config,
        parent: 'phaser-container'
      });
    }

    initPhaser();

    return () => {
      isMounted = false;
      if (gameRef.current) {
        gameRef.current.destroy(true);
        gameRef.current = null;
      }
    };
  }, []);

  return <div id="phaser-container" className="absolute inset-0 z-0 w-full h-full opacity-50" />;
}
