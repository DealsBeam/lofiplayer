import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Default() {
    return(
        <>
            <Background bgClass={'bg-lofi-synthwave'} />
            <div className='absolute'>
                <Player bannerPath={'synthwave'} source={'https://boxradio-edge-00.streamafrica.net/chillwave'}/>
            </div>
        </>
    )
}