import React from "react";
import { Link } from "react-router-dom";
import PropTypes from 'prop-types';
import { notFoundImage } from "../utils/constants";

let HeroCardRight = ({ article }) => {
    return (
        <Link to={article?.url} target="blank" className="group block w-full h-full">
            <figure className="relative h-full overflow-hidden">
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
                <div className="w-full h-[60%] absolute bottom-0 bg-gradient-to-t from-black/75"></div>
            </figure>

            <div className='max-w-max absolute bottom-5 left-5 right-5'>
                <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500">
                    {article?.source}
                </div>
                <h3 className="text-white py-2 md:py-3 md:text-xl group-hover:underline group-hover:underline-offset-4 group-hover:decoration-secondary">
                    {article?.title}
                </h3>
                <div className="text-sm flex flex-wrap gap-x-4">
                    <h4 className="text-white font-medium capitalize">By {article?.author?.substring(0,10)}</h4>
                    <h4 className="text-gray-300">{new Date(article?.date).toDateString()}</h4>
                </div>
            </div>
        </Link>
    )
}

HeroCardRight = React.memo(HeroCardRight);

export default HeroCardRight;

HeroCardRight.propTypes = {
    article: PropTypes.any
}