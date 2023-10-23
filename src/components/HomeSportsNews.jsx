import Slider from 'react-slick';
import { Loading ,Error, HeadingTitle, CategoryCardSlider } from '../components';
import useFetchSingleCategory from '../hooks/useFetchSingleCategory';

const HomeSportsNews = () => {
    const { data:sports, error, loading } = useFetchSingleCategory('sportsCategory');

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false, // disable Because problem with small device layout
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
        ]
    };

    return (
        <section className='pb-12'>
            <div className="container">
                <HeadingTitle title="sports news" />

                {loading ? (
                    <Loading />
                ) : (sports.length > 0) ? (
                    <>
                        <div className='py-5'>
                            {
                                sports.length > 0 ? (
                                    <Slider {...settings}>
                                        {sports.map((article, index) => {
                                            return <CategoryCardSlider key={index} article={article} />
                                        })}
                                    </Slider>
                                ) : (
                                    
                                    <div className='h-[150px] flex items-center justify-center'>
                                        <h3 className='text-center text-orange-400'>No articles found !</h3>
                                    </div>
                                )
                            }
                        </div>
                    </>
                ) : (
                    error && <Error message='There was an error fetching the data.' />
                    )
                }

                {/* {loading && <Loading />}
                
                {error && <Error message='There was an error fetching the data.' />}

                <div className='py-5'>
                    {
                        sports.length > 0 ? (
                            <Slider {...settings}>
                                {sports.map((article, index) => {
                                    return <CategoryCardSlider key={index} article={article} />
                                })}
                            </Slider>
                        ) : (
                            
                            <div className='h-[150px] flex items-center justify-center'>
                                <h3 className='text-center text-orange-400'>No articles found !</h3>
                            </div>
                        )
                    }
                    
                </div> */}
                
                

            </div>
        </section>
    )
}

export default HomeSportsNews