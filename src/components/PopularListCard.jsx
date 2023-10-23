import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

let PopularListCard = ({ article, numberArticles }) => {
    
    return (
        <li>
            <div className='h-auto md:h-[110px] flex items-start gap-2 overflow-hidden'>

                <div className='h-full basis-1/5 flex justify-center'>
                    <div className='w-12 h-12 bg-gray-200 flex items-center justify-center rounded-sm'>
                        <h3 className='font-teko'>{numberArticles + 1}</h3>
                    </div>
                </div>

                <div className='h-full flex-1'>
                    <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500 mb-1 md:mb-2 lg:mb-0">
                        {article?.source}
                    </div>
                    <Link 
                        to={article?.url}
                        target='blank'
                        className='hover:underline hover:underline-offset-4 hover:decoration-secondary'
                    >
                        <h3 className="text-lg">
                            {article?.title}
                        </h3>
                    </Link>
                </div>

            </div>
        </li>
    )
}

PopularListCard = React.memo(PopularListCard);

export default PopularListCard;

PopularListCard.propTypes = {
    article: PropTypes.object,
    numberArticles: PropTypes.number
}