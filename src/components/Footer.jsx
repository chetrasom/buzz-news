import { FooterDetail, FooterCategories, FooterContact } from '../components';

const Footer = () => {
    const getYear = new Date().getFullYear();
    return (
        <footer className='bg-slate-700 text-black mt-20 py-12'>
            <div className="container border-b">
                <div className="grid grid-cols-1 gap-y-8 md:grid-cols-3 md:gap-x-10">
                    <FooterDetail />
                    <FooterCategories />
                    <FooterContact />
                </div>
                <div className='w-full text-center text-white mt-10 pb-1'>
                    <h4 className='flex flex-wrap justify-center items-center gap-1'>
                        <span className='text-white text-base'>Created By</span>
                        <span className='text-secondary text-base font-bold'>CHETRA SOM</span> | All Rights Reserved {getYear}
                    </h4>
                </div>
            </div>
        </footer>
    )
}

export default Footer