import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Radiant() {
    return(
        <>
            <Background bgClass={'bg-lofi-radiant'} />
            <div className='absolute'>
                <Player bannerPath={'radiant'} source={'https://live.hunter.fm/lofi_high'}/>
            </div>
        </>
    )
}