import { nanoid } from "nanoid";
import Logo from "./Logo"
import {
    FaFacebook,
    FaYoutube,
    FaTelegram,
    FaTiktok,
    FaTwitter,
} from 'react-icons/fa';
import { Link } from "react-router-dom";

// eslint-disable-next-line react-refresh/only-export-components
export const socials = [
    { id: nanoid(), icon: <FaFacebook />, url: 'https://www.facebook.com/' },
    { id: nanoid(), icon: <FaYoutube />, url: 'https://www.youtube.com/' },
    { id: nanoid(), icon: <FaTelegram />, url: 'https://telegram.org/' },
    { id: nanoid(), icon: <FaTiktok />, url: 'https://www.tiktok.com/' },
    { id: nanoid(), icon: <FaTwitter />, url: 'https://twitter.com/?lang=en' },
];

const FooterDetail = () => {
    const getYear = new Date().getFullYear();
    
    return (
        <div>
            <div>
                <Logo />
                <div className="py-3">
                    <p className="text-white">Buzz news is a press unit leading in Cambodia.</p>
                    <p className="text-white ">Copyright &copy; {getYear} BuzzNews.</p>
                </div>
                <p className="text-white border-b max-w-max pb-2 mb-3">
                    STREET 598 RUSSEY KEO PHNOM PENH <br />
                    Phnom Penh, Phnom Penh 120705, Cambodia
                </p> 
            </div>

            <div>
                <h4 className="font-teko text-2xl text-white mb-3">Follow Our News</h4>
                <div className="flex flex-wrap items-center gap-3">
                    {socials.map((item) => (
                        <div key={item.id}>
                            <Link 
                                to={item.url}
                                target="blank"
                                className="bg-red-500 w-10 h-10 flex items-center justify-center rounded-sm text-2xl text-white hover:-translate-y-0.5 hover:bg-white hover:text-red-500 transition-all duration-150 ease-in-out">
                                {item.icon}
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default FooterDetail