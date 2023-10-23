import React from "react";
import { Link } from "react-router-dom"
import PropTypes from 'prop-types';
import { notFoundImage } from "../utils/constants";

let NewsHeaderCarouselCard = ({ article }) => {
    const date = new Date(article?.date).toDateString();
    return (
        <div className="flex flex-row items-center gap-4 md:flex-col md:gap-0">
            <figure className="bg-gray-100 w-[40%] md:w-full h-[180px] overflow-hidden mb-2">
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
            </figure>
            <div className="w-[60%] md:w-full">
                <div className="text-sm flex flex-col gap-y-2 gap-x-4 mb-3 md:flex-row md:gap-y-0">
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

NewsHeaderCarouselCard = React.memo(NewsHeaderCarouselCard);

export default NewsHeaderCarouselCard;

NewsHeaderCarouselCard.propTypes = {
    article: PropTypes.any
}