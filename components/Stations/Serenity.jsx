import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Serenity() {
    return(
        <>
            <Background bgClass={'bg-lofi-serenity'} />
            <div className='absolute'>
                <Player bannerPath={'serenity'} source={'https://boxradio-edge-10.streamafrica.net/lofi'}/>
            </div>
        </>
    )
}