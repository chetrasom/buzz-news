import React from 'react';
import { Link } from 'react-router-dom';
import { notFoundImage } from '../utils/constants';
import PropTypes from 'prop-types';

let SingleMainCategory = ({ article, styleImage, styleHeading }) => {
    return (
        <div>
            <Link 
                to={article?.url} 
                target="blank"
                className={`group block ${styleImage}`}
            >
                <figure className="relative h-full overflow-hidden">
                    <img 
                        src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                        alt={article?.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-all ease-linear duration-200"
                    />
                    <div className="w-full h-[50%] absolute bottom-0 bg-gradient-to-t from-black/75"></div>
                </figure>
            </Link>
        
            <div className='mt-5'>
                <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm  bg-gradient-to-r from-rose-500 via-red-400 to-red-500 mb-1 md:mb-2">
                    {article?.source}
                </div>
                
                <Link to={article?.url} target="blank">
                    <h3 className={`${styleHeading} group-hover:underline group-hover:underline-offset-4 group-hover:decoration-secondary mb-1`}>
                        {article?.title}
                    </h3>
                </Link>

                <div className="text-sm flex gap-x-4 mb-1 md:mb-2">
                    <h4 className="font-medium text-secondary">By {article?.author?.substring(0,10)}</h4>
                    <h4 className="text-gray-400">{new Date(article?.date).toDateString()}</h4>
                </div>

                <p>
                    {article?.description}
                </p>
            </div>
        </div>
    )
}

SingleMainCategory = React.memo(SingleMainCategory);

export default SingleMainCategory;

SingleMainCategory.propTypes = {
    article: PropTypes.any,
    styleHeading: PropTypes.string,
    styleImage: PropTypes.string,
}