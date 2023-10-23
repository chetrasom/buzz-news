import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { notFoundImage } from '../utils/constants';

let CategoryList = ({ article }) => {
    const date = new Date(article?.date).toDateString();

    return (  
        <div className='h-auto flex flex-col md:h-[180px] md:flex-row md:items-start md:gap-5'>
            <figure className='h-[215px] overflow-hidden mb-2 md:h-full md:w-[40%]'>
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
                
            </figure>

            <div className="flex-1">
                <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500 mb-2">
                    {article?.source}
                </div>
                <div className="text-sm flex flex-wrap items-center gap-y-1 gap-x-2 mb-2">
                    <h4 className="text-secondary font-medium capitalize">By {article?.author?.substring(0,10)}</h4>
                    <h4 className="text-gray-500">{date}</h4>
                </div>
                <div>
                    <Link 
                        to={article?.url}
                        target="blank" 
                        className="hover:underline hover:underline-offset-2 hover:decoration-secondary"
                    >
                        <h3 className="md:text-xl">
                            {article?.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

CategoryList = React.memo(CategoryList);

export default CategoryList;

CategoryList.propTypes = {
    article: PropTypes.object
}