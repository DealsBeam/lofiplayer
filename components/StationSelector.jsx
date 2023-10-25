import Image from 'next/image';
import { useState } from 'react';

export default function StationSelector({ onStationChange }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMouseEnter = () => {
    setMenuVisible(true);
  };

  const handleMouseLeave = () => {
    setMenuVisible(false);
  };

  return (
    <>
      <div
        className="absolute left-2 bg-white/30 ring-2 ring-inset ring-white/20 hover:ring-1 transition h-32 w-3 rounded-xl hover:scale-125"
        id="stem"
        onMouseEnter={handleMouseEnter}
      />
      <div
        className="absolute left-6 flex flex-col justify-center items-center gap-4 ring-2 ring-inset ring-white/20 bg-black/30 p-3 rounded-2xl hover:scale-105 transition shadow-xl drop-shadow-xl"
        id="menu"
        style={{
          opacity: menuVisible ? 1 : 0,
          pointerEvents: menuVisible ? 'auto' : 'none',
          transform: menuVisible ? 'scale(1)' : 'scale(0.8)',
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
        onMouseLeave={handleMouseLeave}
      >
        <button
          className='hover:scale-105 active:scale-95 transition'
          onClick={() => onStationChange('Default')}
        >
          <Image
            src="/stations/default.png"
            width={100}
            height={100}
            alt="Station 1"
            className='rounded-xl shadow-xl drop-shadow-xl'
          />
        </button>
        <button
          className='hover:scale-105 active:scale-95 transition'
          onClick={() => onStationChange('Synthwave')}
        >
          <Image
            src="/stations/synthwave.png"
            width={100}
            height={100}
            alt="Station 2"
            className='rounded-xl shadow-xl drop-shadow-xl'
          />
        </button>
        <button
          className='hover:scale-105 active:scale-95 transition'
          onClick={() => onStationChange('Serenity')}
        >
          <Image
            src="/stations/serenity.png"
            width={100}
            height={100}
            alt="Station 3"
            className='rounded-xl shadow-xl drop-shadow-xl'
          />
        </button>
        <button
          className='hover:scale-105 active:scale-95 transition'
          onClick={() => onStationChange('Dreamscape')}
        >
          <Image
            src="/stations/dreamscape.png"
            width={100}
            height={100}
            alt="Station 4"
            className='rounded-xl shadow-xl drop-shadow-xl'
          />
        </button>
      </div>
    </>
  );
}
