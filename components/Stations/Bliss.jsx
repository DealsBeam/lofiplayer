import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Bliss() {
    return(
        <>
            <Background bgClass={'bg-lofi-bliss'} />
            <div className='absolute'>
                <Player bannerPath={'bliss'} source={'https://lfhh.radioca.st/stream'}/>
            </div>
        </>
    )
}