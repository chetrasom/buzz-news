import React from "react";
import { Link } from "react-router-dom";
import { notFoundImage } from "../utils/constants"
import PropTypes from 'prop-types';

let SearchCard = ({ article }) => {
    const date = new Date(article?.date).toDateString();

    return (
        <div className="bg-white w-full mx-auto md:max-w-xl lg:max-w-3xl shadow-md">
            <div className="flex flex-col md:flex-row">
                <Link 
                    to={article?.url} 
                    target="blank"
                    className="w-full basis-2/3"
                >
                    <figure className="bg-pink-100 h-[200px] overflow-hidden">
                        <img 
                            src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                            alt={article?.title}
                            className="w-full h-full object-cover"
                        />
                    </figure>
                </Link>
                <div className="w-full p-3">
                    <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500 mb-2">
                        {article?.source}
                    </div>

                    <div className="text-sm flex items-center gap-2 mb-1 md:mb-2">
                        <h4 className="text-secondary font-medium capitalize">By {article?.author?.substring(0,10)}</h4>
                        <h4 className="text-gray-500">{date}</h4>
                    </div>

                    <div>
                        <Link 
                            to={article?.url}
                            target="blank" 
                            className="hover:underline hover:underline-offset-2 hover:decoration-secondary"
                        >
                            <h3 className="text-xl md:text-[22px]">
                                {article?.title}
                            </h3>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

SearchCard = React.memo(SearchCard);

export default SearchCard;

SearchCard.propTypes = {
    article: PropTypes.object
}