import { RiPlayMiniFill, RiPauseMiniFill, HiPlay, } from 'react-icons/ri'

import usePlayer from '@/hooks/usePlayer'
import Image from 'next/image'

const PlayButton = () => {
  const { playing, canplay, play, pause } = usePlayer()

  return (
    <button
     onClick={playing ? pause : play}
     className='h-full w-full flex items-center justify-center hover:scale-105 active:scale-95 transition group'
    >
      <div className='absolute text-white opacity-0 group-hover:opacity-100 z-10'>
        {playing ? (
          <RiPauseMiniFill fontSize={40} />
        ) : (
          <RiPlayMiniFill fontSize={40} />
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
