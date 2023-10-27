import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Ethernal() {
    return(
        <>
            <Background bgClass={'bg-lofi-ethernal'} />
            <div className='absolute'>
                <Player bannerPath={'ethernal'} source={'https://lfhh.radioca.st/stream'}/>
            </div>
        </>
    )
}