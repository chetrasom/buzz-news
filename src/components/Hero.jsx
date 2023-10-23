import { useGlobalContext } from "../context/AppContext"
import { Loading, Error, HeroCardLeft, HeroCardRight } from '../components';

const Hero = () => {
    const { isLoading, isError, randomAllNews } = useGlobalContext();
    
    if (isError) {
        return <Error message='There was an error fetching the data.' />
    }

    return (
        <section className='py-5'>
            <div className="container">
                <div className="grid gap-y-5 grid-cols-1 md:grid-cols-3">
                    <div className="bg-gray-100 relative md:col-span-2 h-[250px] md:h-[450px]">
                        {isLoading ? <Loading /> : <HeroCardLeft article={randomAllNews[0]} />}
                    </div>
                    <div className="space-y-5 h-auto md:space-y-0 md:h-[450px]">
                        <div className="relative h-[250px] md:h-[50%]">
                            {isLoading ? <Loading /> : <HeroCardRight article={randomAllNews[1]} />}
                        </div>
                        <div className="relative h-[250px] md:h-[50%]">
                            {isLoading ? <Loading /> : <HeroCardRight article={randomAllNews[2]} />}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Hero
