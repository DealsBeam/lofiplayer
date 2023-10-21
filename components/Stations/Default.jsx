import Background from '@/components/Bg'
import Player from '@/components/Player'

export default function Default() {
    return(
        <>
            <Background bgClass={'bg-lofi-day'} />
            <div className='absolute'>
                <Player bannerPath={'default'} source={'https://usa9.fastcast4u.com/proxy/jamz?mp=/1'}/>
            </div>
        </>
    )
}