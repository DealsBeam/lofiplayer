import { RiPlayMiniFill, RiPauseMiniFill } from 'react-icons/ri'

import usePlayer from '@/hooks/usePlayer'
import Image from 'next/image'

const PlayButton = () => {
  const { playing, canplay, play, pause } = usePlayer()

  return (
    <button
     onClick={playing ? pause : play}
     className='h-full w-full flex items-center justify-center hover:scale-105 active:scale-95 transition group'
    >
      <div className='absolute flex rounded-xl justify-center items-center backdrop-blur-lg w-full h-full text-white opacity-0 group-hover:opacity-100 transition-all duration-200 z-10'>
        {playing ? (
          <RiPauseMiniFill fontSize={80} />
        ) : (
          <RiPlayMiniFill fontSize={80} />
        )}
      </div>
      <div className="absolute">
        <Image
          src="/banner.png"
          width={700}
          height={700}
          alt="Picture of the author"
          className='rounded-xl shadow-xl drop-shadow-xl'
        />
      </div>
    </button>
  )
}

export default function Player() {
  return (
    <div className="flex justify-center items-center h-64 w-64">
      <PlayButton />
    </div>
  )
}
