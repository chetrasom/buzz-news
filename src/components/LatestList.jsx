import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { notFoundImage } from '../utils/constants';

let LatestList = ({ article }) => {
    const date = new Date(article?.date).toDateString();

    return (
        <div className='h-24 flex items-start gap-2 overflow-hidden'>
            <figure className='basis-1/4 h-full overflow-hidden'>
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
                
            </figure>

            <div className='flex-1'>
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
                        <h3 className="font-hind text-base font-semibold">
                            {article?.title}
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

LatestList = React.memo(LatestList);

export default LatestList;

LatestList.propTypes = {
    article: PropTypes.object
}