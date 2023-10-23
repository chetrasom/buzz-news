import { NavLink } from 'react-router-dom';
import { Logo, SearchNewsInput } from '../components';
import { FaTimes } from 'react-icons/fa';
import { menu } from '../utils/constants';
import { useGlobalContext } from '../context/AppContext';

const MobileSidebar = () => {
    const { isSidebar, closeSidebar, changeCategoryNews } = useGlobalContext();

    return (
        <div className={`${isSidebar ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'} lg:hidden bg-black/30 fixed inset-0 z-40 transition-all ease-in-out duration-300`}>
            {/*  */}
            <div className={`${isSidebar ? 'left-0' : '-left-full'} bg-white absolute top-0 z-40 max-w-[300px] w-full h-screen p-5 ease-in-out transition-all duration-500`}>

                <div className='absolute top-3 right-3 flex items-center justify-center'>
                    <button
                        type='button'
                        aria-label='close menu'
                        className='text-2xl'
                        onClick={closeSidebar}
                    >
                        <FaTimes />
                    </button>
                </div>

                <div className='space-y-4 border-b pb-8'>
                    <Logo />
                    <SearchNewsInput closeSidebar={closeSidebar} />
                </div>

                <ul className='font-teko text-xl divide-y'>
                    {menu.map((item) => (
                        <li key={item.id} className='py-2 capitalize'>
                            <NavLink 
                                to={item.url} 
                                onClick={() => changeCategoryNews(item.category)}
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

            </div>
        </div>
    )
}

export default MobileSidebar