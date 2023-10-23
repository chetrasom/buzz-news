import useFetchSingleCategory from '../hooks/useFetchSingleCategory';
import { HeadingTitle, Loading, Error, CategoryCard } from '../components';
import { shuffleArray } from "../utils/helper";

const HomeEntertainment = () => {
    const { data:entertainment, loading, error } = useFetchSingleCategory('entertainmentCategory');
    const randomArticles = shuffleArray(entertainment);

    return (
        <>
            <HeadingTitle title='entertainment' />
            <div>
                {loading && <Loading />}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                    {randomArticles.slice(0, 6).map((article, index) => {
                        return <CategoryCard key={index} article={article} />
                    })}
                </div>
                {error && <Error message='There was an error fetching the data.' />}
            </div>
        </>
    )
}

export default HomeEntertainment;