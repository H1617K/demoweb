import React, { useState, useRef } from 'react';
import styles from '../Cart/cart.css'

export default function VideoPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const ref = useRef(null);

  function handleClick() {
    const nextIsPlaying = !isPlaying;
    setIsPlaying(nextIsPlaying);

    if (nextIsPlaying) {
      ref.current.play();
    } else {
      ref.current.pause();
    }
  }

  return (
    <div className={styles['video-player-container']}> {/* Use the container style */}
      <button onClick={handleClick} className={styles.button}>
        {isPlaying ? 'Pause' : 'Play'}
      </button>
      <video
        ref={ref}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        className={styles.video} // Apply video styles 
      >
        <source
          src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  );
}
