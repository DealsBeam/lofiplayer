import { useEffect } from 'react'
import { useSnapshot, proxy, ref } from 'valtio'
import { useMediaSession, useMediaMeta } from '@/hooks/useMediaSession'

const STREAM_URL = 'https://usa9.fastcast4u.com/proxy/jamz?mp=/1'
let audio

const state = proxy({
  canplay: false,
  playing: false,
  async play() {
    await audio.play()

    state.playing = true
  },
  pause() {
    audio.pause()

    state.playing = false
  }
})

const initPlayer = () => {
  useMediaMeta({
    title: 'Lofi hip hop radio- beats to relax/study to    ',
    artist: 'Lofi.',
    artwork: [
      { src: '/stations/banner.png', sizes: '512x512', type: 'image/png' }
    ]
  })

  useMediaSession({
    onPlay() {
      state.play()
    },
    onPause() {
      state.pause()
    },
    onStop() {
      state.pause()
    }
  })

  const onLoadedMetadata = () => {
    state.canplay = true
  }

  const onError = () => {
    alert('Something went wrong, please try again later')
  }

  useEffect(() => {
    audio = new Audio(STREAM_URL)

    audio.addEventListener('error', onError)
    audio.addEventListener('loadedmetadata', onLoadedMetadata)

    return () => {
      state.pause()

      audio.removeEventListener('error', onError)
      audio.removeEventListener('loadedmetadata', onLoadedMetadata)
    }
  }, [])
}

export default () => {
  return useSnapshot(state)
}

export { initPlayer }
