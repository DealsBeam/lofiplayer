// components/Card.js
import React from 'react';
import Image from 'next/image';

const Card = ({ imageSrc, label }) => {
  const [isHovered, setHovered] = React.useState(false);

  return (
    <div
      className="relative group overflow-hidden rounded-md transition-transform transform hover:scale-105"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
        <Image
          src={`/stations/${imageSrc}.png`}
          width={100}
          height={100}
          alt="Station 3"
          className='rounded-xl shadow-xl drop-shadow-xl'
        />
      {isHovered && (
        <div className="flex items-center justify-center bg-black bg-opacity-80 transition-opacity opacity-0 group-hover:opacity-100">
          <p className="text-white text-2xl">{label}</p>
        </div>
      )}
    </div>
  );
};

export default Card;
