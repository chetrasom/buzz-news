import React from 'react';
import PropTypes from 'prop-types';

let HeadingTitle = ({ title }) => {
    return (
        <div>
            <h4 className='capitalize font-teko text-2xl md:text-[26px] pb-1'>{title}</h4>
            <div className='relative bg-gray-300 h-[5px] w-full'>
                <div className='absolute top-0 left-0 bg-secondary h-full w-full max-w-[75px]'></div>
            </div>
        </div>
    )
}

HeadingTitle = React.memo(HeadingTitle);

export default HeadingTitle;

HeadingTitle.propTypes = {
    title: PropTypes.string
}