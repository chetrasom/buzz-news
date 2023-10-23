import { LatestPost, LatestAds, LatestTags, LatestNewsletter } from '../components';

const AsideNews = () => {
    return (
        <div className='space-y-6'>
            <LatestPost />
            <LatestAds />
            <LatestTags />
            <LatestNewsletter />
        </div>
    )
}

export default AsideNews