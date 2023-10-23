import { Helmet, HelmetProvider } from 'react-helmet-async';
import { useGlobalContext } from '../context/AppContext';
import { imageCategorySizeLarge, imageCategorySizeSmall, textCategoryLarge, textCategorySmall } from '../utils/styles';
import { SingleMainCategory, Loading, Error } from '../components';

const Business = () => {
    const { data:newsSports, categoryLoading, categoryError, randomCategoryNews } = useGlobalContext();
    const mainArticle = newsSports[4] || newsSports[0];


    let content;

    if (categoryLoading === true) {
        content = <Loading />
    } else if (categoryLoading === false) {
        content = (
            <div className='space-y-5'>
                {/* start main */}
                <div>
                    <SingleMainCategory 
                        styleImage={imageCategorySizeLarge} 
                        styleHeading={textCategoryLarge}
                        article={mainArticle}
                    />
                </div>
                {/* end main */}

                <ul className='grid grid-cols-1 md:grid-cols-2 gap-5'>
                    {randomCategoryNews.map((article, index) => (
                        <li key={index}>
                            <SingleMainCategory 
                                article={article}
                                styleImage={imageCategorySizeSmall} 
                                styleHeading={textCategorySmall} 
                            />
                        </li>
                    ))}
                </ul>
            </div>
        )
    } else if (categoryError) {
        content = <Error message='There was an error fetching the data.' />
    }

    return (
        <>
            <HelmetProvider>
                <Helmet><title>Business</title></Helmet>
            </HelmetProvider>

            {content}
            
        </>
    )
}

export default Business