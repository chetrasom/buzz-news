import { Helmet, HelmetProvider } from 'react-helmet-async';

const Contact = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>Contact</title>
                </Helmet>

                <div>
                    <h2 className='mb-4'>About page 2023 - testing Technology</h2>
                </div>
            </HelmetProvider>
        </>
    )
}

export default Contact