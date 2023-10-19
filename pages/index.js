import Background from '@/components/Bg'
import Player from '@/components/Player'

import { initPlayer } from '@/hooks/usePlayer'

export default function Home() {
  initPlayer()

  return (
    <main className='h-full w-full flex justify-center items-center'>
      <Background />
      <div className='absolute'>
        <Player />
      </div>
    </main>
  )
}
