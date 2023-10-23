import { Helmet, HelmetProvider } from 'react-helmet-async';
import { MarqueeText, Hero, NewsHeaderCarousel, FeaturesPost, HomeSportsNews, WrapperNews } from '../components';

const Home = () => {
    return (
        <>
            <HelmetProvider>
                <Helmet>
                    <title>BuzzNews</title>
                </Helmet>

                <MarqueeText />
                <Hero />
                <NewsHeaderCarousel />
                <FeaturesPost />
                <HomeSportsNews />
                <WrapperNews />
            </HelmetProvider>
        </>
    )
}

export default Home