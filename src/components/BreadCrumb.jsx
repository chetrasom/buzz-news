import React from 'react'
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { AiTwotoneHome } from 'react-icons/ai';
import { useGlobalContext } from '../context/AppContext';

let BreadCrumb = ({ title }) => {
    const { changeCategoryNews } = useGlobalContext();

    return (
        <div className='flex items-center gap-1 text-[15px]'>
            <Link 
                to='/' 
                className='hover:text-secondary flex items-center gap-1'
                onClick={() => changeCategoryNews('projects')}
            >
                <AiTwotoneHome className='text-lg' /> Home
            </Link>
            <span className='text-[15px] capitalize'>{title.replace('/', '/ ')}</span>
        </div>
    )
}

BreadCrumb = React.memo(BreadCrumb);

export default BreadCrumb;

BreadCrumb.propTypes = {
    title: PropTypes.string
}