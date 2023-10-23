import { Link } from 'react-router-dom'
import { tags } from '../utils/constants'
import { useGlobalContext } from '../context/AppContext'

const FooterCategories = () => {
    const { changeCategoryNews } = useGlobalContext();
    
    return (
        <div>
            <h4 className='font-teko text-2xl lg:text-3xl text-white mb-4 flex items-center gap-1.5'>
                News<span className='text-2xl lg:text-3xl text-secondary'>Category</span>
            </h4>
            <div className='grid grid-cols-2 gap-5'>
                <ul className='space-y-4'>
                    {tags.slice(0, 5).map((item) => (
                        <li key={item.id}>
                            <Link 
                                to={item.url} 
                                className='block text-white capitalize font-medium hover:text-secondary hover:-translate-y-0.5
                                ease-linear transition-all duration-150'
                                onClick={() => changeCategoryNews(item?.category)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>

                <ul className='space-y-4'>
                    {tags.slice(5, 10).map((item) => (
                        <li key={item.id}>
                            <Link 
                                to={item.url} 
                                className='block text-white capitalize font-medium hover:text-secondary hover:-translate-y-0.5
                                ease-linear transition-all duration-150'
                                onClick={() => changeCategoryNews(item?.category)}
                            >
                                {item.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    )
}

export default FooterCategories