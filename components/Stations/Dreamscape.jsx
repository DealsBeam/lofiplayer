import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Default() {
    return(
        <>
            <Background bgClass={'bg-lofi-dreamscape'} />
            <div className='absolute'>
                <Player bannerPath={'dreamscape'} source={'https://live.radiospinner.com/lofi-hip-hop-64'}/>
            </div>
        </>
    )
}