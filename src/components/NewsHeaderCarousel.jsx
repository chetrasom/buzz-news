import Slider from "react-slick";
import { useGlobalContext } from "../context/AppContext"
import NewsHeaderCarouselCard from "./NewsHeaderCarouselCard"

const NewsHeaderCarousel = () => {
    const { randomAllNews } = useGlobalContext();

    var settings = {
        dots: false,
        infinite: true,
        // speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 0,
        arrows: false, // disable Because problem with small device layout
        // autoPlay
        // autoplay: true,
        // speed: 5000,
        // autoplaySpeed: 2000,
        // cssEase: "linear",
        // pauseOnHover: true,
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
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    };

    return (
        <section>
            <div className="container">
                <Slider {...settings}>
                    {randomAllNews.map((article, index) => {
                        return <NewsHeaderCarouselCard key={index} article={article} />
                    })}
                </Slider>
            </div>
        </section>
    )
}

export default NewsHeaderCarousel