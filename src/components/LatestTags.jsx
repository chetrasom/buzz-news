import { Link } from 'react-router-dom';
import { HeadingTitle } from '../components';
import { tags } from '../utils/constants';
import { useGlobalContext } from '../context/AppContext';

const LatestTags = () => {
    const { changeCategoryNews } = useGlobalContext();

    return (
        <>
            <HeadingTitle title="Tags" />
            <div className='flex flex-wrap gap-2'>
                {tags.map((item) => {
                    return (
                        <Link 
                            to={item.url} 
                            key={item.id} 
                            className='hover:bg-secondary hover:text-white duration-100'
                            onClick={() => changeCategoryNews(item?.category)}
                        >
                            <div  className='max-w-max border rounded-sm py-2 px-3 capitalize'>
                                #{item.name}
                            </div>
                        </Link>
                    )
                })}
            </div>
        </>
    )
}

export default LatestTags