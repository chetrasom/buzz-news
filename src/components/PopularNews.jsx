import { HeadingAsideTitle, PopularPost } from '../components';
import { useGlobalContext } from '../context/AppContext';

const PopularNews = () => {
    const { randomAllNews } = useGlobalContext();

    return (
        <>
            <HeadingAsideTitle title='popular news' />
            <PopularPost data={randomAllNews} />
        </>
    )
}

export default PopularNews