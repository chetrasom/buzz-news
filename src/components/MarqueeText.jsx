import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../context/AppContext";

const MarqueeText = () => {
    const { randomAllNews } = useGlobalContext();

    const filterTitleHeadline = randomAllNews.slice(0, 8).map((item, index) => {
        return (
            <Link 
                key={index}
                to={item?.url} 
                className="hover:text-blue-500 hover:underline hover:underline-offset-4"
            >
                {item?.title}
            </Link>
        )
    });

    return (
        <section className="border-b h-12 flex items-center">
            <div className="container relative">
                <Marquee
                    speed={60}
                    pauseOnHover={true}
                    direction="left"
                >
                    <div className="flex items-center gap-x-8 text-sm lg:text-[15px] [&>*:last-child]:pr-8">
                        {filterTitleHeadline}
                    </div>
                </Marquee>
            </div>
        </section>
    )
}

export default MarqueeText