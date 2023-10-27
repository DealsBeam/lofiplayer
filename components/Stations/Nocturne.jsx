import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Nocturne() {
    return(
        <>
            <Background bgClass={'bg-lofi-nocturne'} />
            <div className='absolute'>
                <Player bannerPath={'nocturne'} source={'https://stream-153.zeno.fm/3u1qndyk8rhvv?zs=04YRkRsDTa6g3uNhuKl5-A'}/>
            </div>
        </>
    )
}