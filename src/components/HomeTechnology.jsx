import useFetchSingleCategory from '../hooks/useFetchSingleCategory';
import { shuffleArray } from '../utils/helper';
import { HeadingTitle, Loading, Error, CategoryList } from '../components';

const HomeTechnology = () => {
    const { data: technology, loading, error } = useFetchSingleCategory('technologyCategory');

    const randomArticles = shuffleArray(technology);

    return (
        <>
            <HeadingTitle title='technology' />
            <div>
                {loading && <Loading />}
                <div className='space-y-5'>
                    {randomArticles.map((article, index) => {
                        return <CategoryList key={index} article={article} />
                    })}
                </div>
                {error && <Error message='There was an error fetching the data.' />}
            </div>
        </>
    )
}

export default HomeTechnology