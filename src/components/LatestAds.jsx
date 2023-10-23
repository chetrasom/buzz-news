import { HeadingTitle } from '../components';
import { bannerA1 } from '../utils/constants';

const LatestAds = () => {
    return (
        <>
            <HeadingTitle title='Advertise' />
            <div className='h-[250px] overflow-hidden'>
                <img src={bannerA1} alt="ads" className='w-full h-full object-cover' />
            </div>
        </>
    )
}

export default LatestAds;