import { useState } from 'react';

export default function VolumeControl({ volume, onVolumeChange, volumeVisible, setVolumeVisible, handleMouseLeave }) {
  return (
    <div
      style={{
        opacity: volumeVisible ? 1 : 0,
        pointerEvents: volumeVisible ? 'auto' : 'none',
        transform: volumeVisible ? 'scale(1)' : 'scale(0.8)',
        transition: 'opacity 0.23s ease-in-out, transform 0.23s ease-in-out',
      }}
      onMouseEnter={() => setVolumeVisible(true)}
      onMouseLeave={handleMouseLeave}
    >
      <div
        className='bg-black/30 absolute w-full mt-3 rounded-full p-2 shadow-xl drop-shadow-xl ring-2 ring-white/10 px-4'
        style={{
          opacity: 1,
          pointerEvents: 'auto',
          transform: 'scale(1)',
        }}
      >
        <input
          type="range"
          min="0"
          max="1"
          step={0.01}
          value={volume}
          onChange={onVolumeChange}
          id="volume"
          className="slider"
          style={{background: `linear-gradient(90deg, #fff 0% ${volume*100}%, #000 ${volume*100}% 100%)`,}}
        />
      </div>
    </div>
  );
}
