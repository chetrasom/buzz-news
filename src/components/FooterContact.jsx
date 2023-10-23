import { Link } from 'react-router-dom';
import { BsFillPhoneVibrateFill, BsTelegram } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { appStore, googlePlay } from '../utils/constants';

const FooterContact = () => {
    return (
        <div className="space-y-4">
            <div className="text-white">
                <h4 className='font-teko text-2xl lg:text-3xl text-white mb-4 flex items-center gap-1.5'>
                    Advertise<span className='text-2xl lg:text-3xl text-secondary'>With us</span>
                </h4>
                <ul className='space-y-2'>
                    <li>
                        <div className='flex flex-wrap items-start gap-3'>
                            <BsFillPhoneVibrateFill className='text-2xl text-white' />
                            <div>
                                <span className='text-white text-base'>Tel: +855 10 888 999</span>
                                <span className='text-white text-base'>
                                    <strong className='invisible'>Tel:</strong> +855 97 11 66 888
                                </span>
                            </div>
                        </div></li>
                    <li>
                        <div className='flex flex-wrap items-start gap-3'>
                            <AiFillMail className='text-2xl text-white' />
                            <span className='text-white text-base'>buzznewscambodia@gmail.com</span>
                        </div>
                    </li>
                    <li>
                        <div className='flex flex-wrap items-start gap-3'>
                            <BsTelegram className='text-2xl text-white' />
                            <span className='text-white text-base'>@buzznewscambodia</span>
                        </div>
                    </li>
                </ul>
            </div>

            <div>
                <h4 className='font-teko text-2xl lg:text-3xl text-white mb-4 flex flex-wrap items-center gap-1.5'>
                    Experience news <span className='text-2xl lg:text-3xl text-secondary'>With our Apps</span>
                </h4>
                <div className='flex gap-3'>
                    <div>
                        <Link to="https://www.apple.com/app-store/" target='blank'>
                            <img src={appStore} alt="app" />
                        </Link>
                    </div>
                    <div>
                        <Link to='https://play.google.com/store/apps?hl=en&gl=US&pli=1' target='blank'>
                            <img src={googlePlay} alt="app" />
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FooterContact