import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { notFoundImage } from '../utils/constants';

const RecentPostList = ({ article }) => {
    const date = new Date(article?.date).toDateString();

    return (
        <div className="h-[90px] md:h-[120px] flex flex-row items-start gap-4 overflow-hidden">
            <figure className="h-full w-[50%] overflow-hidden">
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
            </figure>
            <div className="w-full">
                <div className="text-sm flex flex-wrap items-center gap-2 mb-1 md:mb-2 lg:mb-0">
                    <h4 className="text-secondary font-medium capitalize">By {article?.author?.substring(0,10)}</h4>
                    <h4 className="text-gray-500">{date}</h4>
                </div>
                <div>
                    <Link 
                        to={article?.url}
                        target="blank" 
                        className="hover:underline hover:underline-offset-2 hover:decoration-secondary"
                    >
                        <h3 className="text-lg md:text-xl">
                            {article?.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default RecentPostList;

RecentPostList.propTypes = {
    article: PropTypes.any
}