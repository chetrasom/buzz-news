import { Link } from "react-router-dom"
import { useGlobalContext } from "../context/AppContext"

const Logo = () => {
    const { changeCategoryNews } = useGlobalContext();

    return (
        <Link 
            to="/" 
            className="mx-auto lg:mx-0"
            onClick={() => changeCategoryNews('projects')}
        >
            <div className="font-teko text-4xl flex items-center lg:text-[42px]">
                Buzz <span className="text-4xl text-red-500 lg:text-[42px]">News</span>
            </div>
        </Link>
    )
}

export default Logo