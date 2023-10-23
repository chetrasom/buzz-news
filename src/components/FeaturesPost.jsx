import { RecentPost, PopularPost, Loading, Error, HeadingTitle } from '../components';
import { useGlobalContext } from '../context/AppContext';

const FeaturesPost = () => {
    const { isLoading, isError, randomAllNews } = useGlobalContext();

    if (isError) {
        return <Error message='There was an error fetching the data.' />
    }

    return (
        <section className='py-12'>
            <div className="container">
                <div className='grid grid-cols-1 gap-y-5 md:gap-y-10 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-10'>
                    <div className='lg:col-span-2'>
                        {isLoading ? <Loading /> : <RecentPost data={randomAllNews} />}
                    </div>
                    <div>
                        <HeadingTitle title='popular post' />
                        {isLoading ? <Loading /> : <PopularPost data={randomAllNews} />}  
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesPost