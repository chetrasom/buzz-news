import { Link } from "react-router-dom";
import { notFoundImage } from "../utils/constants";
import PropTypes from 'prop-types';

const LatestFirst = ({ article }) => {
    return (
        <div className="overflow-hidden">
            <figure className="bg-gray-100 h-[215px] overflow-hidden mb-2">
                <img 
                    src={article?.urlToImage ? article?.urlToImage : notFoundImage} 
                    alt={article?.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-all ease-linear duration-200"
                />
            </figure>
            <div className="w-full">
                <div className="max-w-max text-sm text-white py-1 px-2 rounded-sm bg-gradient-to-r from-rose-500 via-red-400 to-red-500 mb-2">
                    {article?.source}
                </div>
                <div className="text-sm flex flex-wrap items-center gap-y-1 gap-x-2 mb-2">
                    <h4 className="text-secondary font-medium">By {article?.author?.substring(0,10)}</h4>
                    <h4 className="text-gray-500">{new Date(article?.date).toDateString()}</h4>
                </div>
                <div className="mb-2">
                    <Link 
                        to={article?.url}
                        target="blank" 
                        className="hover:underline hover:underline-offset-2 hover:decoration-secondary"
                    >
                        <h3 className="md:text-xl">
                            {article?.title}
                        </h3>
                    </Link>
                </div>
                <p className="text-[15px]">
                    {article?.description}
                </p>
                <div className="pt-3">
                    <Link 
                        to={article?.url}
                        target="blank"
                        className="block max-w-max border border-secondary rounded-sm text-[15px] text-secondary 
                        font-medium py-2 px-3 md:px-4 md:py-2.5 lg:px-5 lg:py-3 hover:bg-secondary hover:text-white"
                    >
                        Read More
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default LatestFirst;

LatestFirst.propTypes = {
    article: PropTypes.object
}