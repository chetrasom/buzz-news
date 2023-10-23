import React from 'react';
import PropTypes from 'prop-types';

let HeadingAsideTitle = ({ title }) => {
    return (
        <div className='bg-green-600 w-full h-10 flex items-center px-4'>
            <h4 className='capitalize font-teko text-gray-50 text-xl'>{title}</h4>
        </div>
    )
}

HeadingAsideTitle = React.memo(HeadingAsideTitle);

export default HeadingAsideTitle;

HeadingAsideTitle.propTypes = {
    title: PropTypes.string
}