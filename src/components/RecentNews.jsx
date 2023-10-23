import { Link } from 'react-router-dom';
import { HeadingAsideTitle } from '../components';
import { useGlobalContext } from '../context/AppContext';
import { notFoundImage } from '../utils/constants';

const RecentNews = () => {
    const { randomCategoryNews } = useGlobalContext();

    return (
        <>
            <HeadingAsideTitle title='recent news' />

            <ul className='mt-3 divide-y'>
                {randomCategoryNews.slice(0, 4).map((article, index) => {
                    const date = new Date(article?.date).toDateString();
                    return (
                        <li className='py-2' key={index}>
                            <Link to={article?.url} target='blank'>
                                <div className='flex items-start gap-2 h-[125px] md:h-[150px] lg:h-[125px] overflow-hidden'>
                                    <div className='h-full w-full'>
                                        <p className='text-sm text-secondary font-medium'>{date}</p>
                                        <div className="hidden md:block md:my-2 lg:hidden max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                                            {article?.source}
                                        </div>
                                        <h4 className='font-teko text-lg md:text-xl lg:text-lg'>{article?.title}</h4>
                                        
                                    </div>
                                    <figure className='bg-gray-50 h-full basis-1/2'>
                                        <img 
                                            src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                                            alt={article?.title}
                                            className='w-full h-full object-cover'
                                        />
                                    </figure>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
        </>
    )
}

export default RecentNews