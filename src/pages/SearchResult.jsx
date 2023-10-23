import { useState, useEffect } from "react"
import { useSearchParams } from "react-router-dom";
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { createClient } from "contentful"
import { Loading, SearchCard } from '../components';
import { VscSearchStop } from 'react-icons/vsc';

const SearchResult = () => {
    const [newsData, setNewsData] = useState([]);
    const [loading, setLoading] = useState(false);

    const [searchParams] = useSearchParams();
    const search = searchParams ? searchParams.get('q') : null;

    const searchFilterNews = newsData.filter((item) => item.title.toLowerCase().includes(search.toLocaleLowerCase()))

    const client = createClient({
        space: import.meta.env.VITE_SPACE_ID_KEY,
        environment: 'master',
        accessToken: import.meta.env.VITE_ACCESS_TOKEN_KEY
    });

    useEffect(() => {
        const controller = new AbortController()
        const signal = controller.signal

        const getNews = async () => {
          try {
                const response = await client.getEntries({ content_type: `projects` }, {signal});

                const newProjects = response.items.map((item) => {
                    const id = item?.sys?.id;
                    const { title, url, description, image, date, author, source } = item.fields;
                    const urlToImage = image?.fields?.file?.url

                    return { id, title, url, description, urlToImage, date, author, source }
                });
                
                setLoading(false)
                setNewsData(newProjects)

          } catch(error) {
                setLoading(false);
                if (typeof error === 'object' && error !== null) {
                    // <Error message={error.toString()} />
                    console.log(error.toString());
                } else {
                    console.log('Unexpected error', error);
                }
            }
        }

        getNews()
    
        return () => {
            controller.abort()
        }

    }, [search]);


    return (
        <>
            <HelmetProvider>
                <Helmet><title>Search</title></Helmet>
            </HelmetProvider>

            {loading ? (
                <Loading />
            ) : (
                <div className="container pt-12 pb-28">
                    {
                        searchFilterNews.length > 0 ? (
                            <>
                                <div className="pb-5">
                                    <h4 className="font-teko flex flex-wrap items-center justify-center gap-1 text-2xl lg:text-3xl">
                                        Search results for keyword: 
                                        <span className="text-secondary text-2xl lg:text-3xl font-medium">{`" ${search} "`}</span>
                                        found in {searchFilterNews?.length} post{searchFilterNews?.length > 1 ? 's': null}.
                                    </h4>
                                </div>
                                
                                <ul className="space-y-5">
                                    {searchFilterNews.map((article, index) => (
                                        <li key={index}>
                                            <SearchCard article={article} />
                                        </li>
                                    ))}
                                </ul>
                            </>
                        ) : (
                            <h4 className="font-teko flex flex-col items-center justify-center gap-3 text-2xl lg:text-3xl">
                                <VscSearchStop className="text-5xl block" />
                                <div className="flex items-center gap-1">
                                    Oops! No results for:
                                    <span className="text-secondary text-2xl lg:text-3xl font-medium">{`" ${search} "`}</span>
                                </div>
                            </h4>
                        )
                    }
                </div>
            ) }

            
        </>
    )
}

export default SearchResult