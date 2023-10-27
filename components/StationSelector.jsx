import Image from 'next/image';
import { useState, useEffect, useRef } from 'react';
import ExploreMenu from '@/components/Explorer/ExploreMenu';

export default function StationSelector({ onStationChange }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const hideMenuTimeoutRef = useRef(null);

  const handleMouseEnter = () => {
    setMenuVisible(true);
    clearTimeout(hideMenuTimeoutRef.current); // Clear any existing timeout
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the menu
    hideMenuTimeoutRef.current = setTimeout(() => {
      setMenuVisible(false);
    }, 500);
  };

  // Clear the timeout when the component unmounts
  useEffect(() => {
    return () => {
      clearTimeout(hideMenuTimeoutRef.current);
    };
  }, []);

  return (
    <>
      <div
        className="absolute z-20 left-2 bg-white/30 transition h-32 w-3 rounded-xl hover:scale-125"
        id="stem"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      />
      <div
        className="absolute left-6 flex flex-col justify-center items-center gap-4 ring-2 ring-inset ring-white/20 bg-black/30 p-3 rounded-2xl transition shadow-xl drop-shadow-xl"
        id="menu"
        style={{
          opacity: menuVisible ? 1 : 0,
          pointerEvents: menuVisible ? 'auto' : 'none',
          transform: menuVisible ? 'scale(1.0)' : 'scale(0.8)', // Use 'scale(1.05)' on hover
          transition: 'opacity 0.3s ease-in-out, transform 0.3s ease-in-out',
        }}
        onMouseEnter={handleMouseEnter}
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
        <ExploreMenu onStationChange={onStationChange} hideMenu={handleMouseLeave}/>
      </div>
    </>
  );
}
