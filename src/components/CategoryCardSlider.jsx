import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { notFoundImage } from "../utils/constants";

let CategoryCardSlider = ({ article }) => {
    const date = new Date(article?.date).toDateString();

    return (
        <div>
            <figure className="bg-gray-100 h-[125px] md:h-[150px] lg:h-[180px] overflow-hidden mb-2">
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
            </figure>
            <div className="w-full">
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
                            {`${article?.title > article?.title.substring(0, 110) 
                            ? (`${article?.title.substring(0,100)}...`)
                            : (article?.title)}`}
                        </h3>
                    </Link>
                </div>
            </div>
        </div>
    )
}

CategoryCardSlider = React.memo(CategoryCardSlider);

export default CategoryCardSlider;

CategoryCardSlider.propTypes = {
    article: PropTypes.object
}