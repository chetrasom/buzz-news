import React from 'react';
import { PopularListCard } from '../components';
import PropTypes from 'prop-types';

let PopularPost = ({ data }) => {
    return (
        <div className='mt-5'>
            <ul className='space-y-5 md:space-y-0 lg:space-y-5'>
                {data.slice(0, 4).map((article, index) => {
                    return <PopularListCard key={index} article={article} numberArticles={index} />
                })}
            </ul>
        </div>
    )
}

PopularPost = React.memo(PopularPost);

export default PopularPost;

PopularPost.propTypes = {
    data: PropTypes.any
}