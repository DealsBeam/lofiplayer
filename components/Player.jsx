import { FaPlay, FaPause } from 'react-icons/fa';
import Image from 'next/image';
import { useRef, useState } from 'react';
import VolumeControl from '@/components/VolumeControl';

export default function Player({ bannerPath, source }) {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [volume, setVolume] = useState(1.0); // Initialize volume at 100%
  const [volumeVisible, setVolumeVisible] = useState(false);

  const handleMouseEnter = () => {
    setVolumeVisible(true);
  };

  const handleMouseLeave = () => {
    setVolumeVisible(false);
  };

  const togglePlayback = () => {
    const audio = audioRef.current;
    if (audio.paused) {
      audio.play();
      setIsPlaying(true);
    } else {
      audio.pause();
      setIsPlaying(false);
    }
  };

  const handleVolumeChange = (e) => {
    const audio = audioRef.current;
    const newVolume = parseFloat(e.target.value);
    audio.volume = newVolume;
    setVolume(newVolume);
  };

  return (
    <div className="relative">
      <div
        className="flex justify-center items-center h-64 w-64"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="stem"
      >
        <button
          onClick={togglePlayback}
          className="h-full w-full flex items-center justify-center hover:scale-105 active:scale-95 transition group"
        >
          <div className="absolute flex rounded-xl justify-center items-center backdrop-blur-lg w-full h-full text-white opacity-0 group-hover:opacity-100 transition-all duration-200 z-10">
            {isPlaying ? (
              <FaPause fontSize={40} />
            ) : (
              <FaPlay fontSize={40} />
            )}
          </div>
          <div className="absolute">
            <Image
              src={`/stations/${bannerPath}.png`}
              width={700}
              height={700}
              alt="Picture of the author"
              className="rounded-xl shadow-xl drop-shadow-xl"
            />
          </div>
          <audio ref={audioRef} hidden>
            <source src={`${source}`} type="audio/mpeg" />
            Your browser does not support the audio element.
          </audio>
        </button>
      </div>
      <VolumeControl
        volume={volume}
        onVolumeChange={handleVolumeChange}
        volumeVisible={volumeVisible}
        setVolumeVisible={setVolumeVisible}
        handleMouseLeave={handleMouseLeave}
      />
    </div>
  );
}
