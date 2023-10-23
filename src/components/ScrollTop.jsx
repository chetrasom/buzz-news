import { useState, useEffect } from 'react'
import { BsArrowBarUp } from 'react-icons/bs';

const ScrollTop = () => {
    const [isVisible, setIsVisible] = useState(false);

    // Top: 0 takes us all the way back to the top of the page
    // Behavior: smooth keeps it smooth!
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    };

    useEffect(() => {
        // Button is displayed after scrolling for 500 pixels
        const toggleVisibility = () => {
            if (window.scrollY > 500) { // (window.pageYOffset > 500) default
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
    
        window.addEventListener("scroll", toggleVisibility);
    
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    // Ex. scroll-to-top classes: fixed, bottom:0, right:0
    return (
        <div className='fixed bottom-10 right-7 md:bottom-14 md:right-14'>
            {isVisible && (
                <button 
                    type='button' 
                    aria-label='scroll-to-top'
                    onClick={scrollToTop}
                    className='bg-secondary text-white rounded-sm p-1 md:p-2'
                >
                    <BsArrowBarUp className='text-2xl md:text-3xl' />
                </button>
                
            )}
        </div>
    )
}

export default ScrollTop