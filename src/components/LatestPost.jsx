import { useGlobalContext } from "../context/AppContext";
import { HeadingTitle, LatestFirst, LatestList } from '../components';

const LatestPost = () => {
    const { randomAllNews } = useGlobalContext();
    const postOne = randomAllNews[4];

    return (
        <>
            <HeadingTitle title="latest post" />
            <LatestFirst article={postOne} />
            <div className="space-y-2">
                {randomAllNews.slice(0, 3).map((article, index) => {
                    return <LatestList key={index} article={article} />
                })}
            </div>
        </>
    )
}

export default LatestPost