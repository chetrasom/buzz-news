import { NavLink } from 'react-router-dom';
import { menu } from '../utils/constants';
import SearchNewsInput from './SearchNewsInput';

import { useGlobalContext } from '../context/AppContext';

const Navbar = () => {
    const { changeCategoryNews } = useGlobalContext();

    return (
        <ul className='flex items-center gap-x-8 font-teko text-xl uppercase'>
            {menu.map((item) => (
                <li key={item.id}>
                    <NavLink
                        to={item.url}
                        className={({ isActive, isPending }) =>
                            isPending ? "pending" : isActive ? "text-secondary" : ""
                        }
                        onClick={() => changeCategoryNews(item?.category)}
                    >
                        {item.name}
                    </NavLink>
                </li>
            ))}

            <li>
                <SearchNewsInput />
            </li>

        </ul>
    )
}

export default Navbar