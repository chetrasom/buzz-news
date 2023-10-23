import { Helmet, HelmetProvider } from 'react-helmet-async';

const About = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>About</title>
                </Helmet>

                <section>
                    <h2 className='mb-4'>About page 2023 - testing sports</h2>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod assumenda vitae impedit, nobis voluptatibus rerum earum at soluta? Doloremque, perspiciatis repudiandae eveniet soluta odit sequi officia magnam ea magni. Nostrum?
                    </p>
                </section>
                
            </HelmetProvider>
        </>
    )
}

export default About