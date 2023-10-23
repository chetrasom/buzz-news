import React from 'react';
import { HeadingTitle, RecentPostGrid, RecentPostList } from '../components';
import PropTypes from 'prop-types';

let RecentPost = ({ data }) => {
    const gridArticleOne = data[0];
    const gridArticleTwo = data[1];

    return (
        <div className='h-full space-y-5'>
            <HeadingTitle title='recent post' />

            <div className='grid gap-5 grid-cols-1 md:grid-cols-2'>
                <div className='bg-gray-300'>
                    <RecentPostGrid article={gridArticleOne} />
                </div>
                <div className='bg-gray-300'>
                    <RecentPostGrid article={gridArticleTwo} />
                </div>
            </div>
            
            <div className='grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-5'>
                {data.slice(0,4).map((article, index) => {
                    return <RecentPostList key={index} article={article} />
                })}
            </div>
        </div>
    )
}

RecentPost = React.memo(RecentPost);

export default RecentPost;

RecentPost.propTypes = {
    data: PropTypes.any
}