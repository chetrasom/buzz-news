import { useState, useEffect } from 'react';
import { FiMenu } from 'react-icons/fi';
import Logo from './Logo';
import Navbar from './Navbar';
import { useGlobalContext } from '../context/AppContext';

const Header = () => {
    const { openSidebar } = useGlobalContext();
    const [isSticky, setIsSticky] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 85) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        }

    }, []);

    return (
        <header className={`${isSticky ? 'bg-white shadow-md py-4' : 'bg-white shadow-sm py-4'}
        fixed w-full z-40 transition-all ease-linear duration-150`}>
            <div className="container">
                <div className='flex items-center lg:justify-between'>
                    <button
                        type='button'
                        aria-label='open mobile menu'
                        className='lg:hidden text-3xl font-bold'
                        onClick={openSidebar}
                    >
                        <FiMenu />
                    </button>

                    <Logo />

                    <nav className='hidden lg:block'>
                        <Navbar />
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header