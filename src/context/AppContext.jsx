import { useState, createContext, useContext, useEffect } from "react";
import PropTypes from 'prop-types';
import { createClient } from "contentful"
import { shuffleArray } from "../utils/helper";
import useFetchSingleCategory from "../hooks/useFetchSingleCategory";

const AppContext = createContext();

export const AppProvider = ({ children }) => {
    const [isSidebar, setIsSidebar] = useState(false);
    
    const [newsData, setNewsData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(null);

    const [categoryNews, setCategoryNews] = useState('projects');
    const { data, loading:categoryLoading, error:categoryError } = useFetchSingleCategory(`${categoryNews}`);

    const client = createClient({
        space: import.meta.env.VITE_SPACE_ID_KEY,
        environment: 'master',
        accessToken: import.meta.env.VITE_ACCESS_TOKEN_KEY
    });
    
    useEffect(() => {
        const getNews = async () => {
            setIsLoading(true)
            try {    
                const response = await client.getEntries({ content_type: `projects` });

                const newProjects = response.items.map((item) => {
                    const id = item?.sys?.id;
                    const { title, url, description, image, date, author, source } = item.fields;
                    const urlToImage = image?.fields?.file?.url

                    return { id, title, url, description, urlToImage, date, author, source }
                });
                
                setIsLoading(false)
                setNewsData(newProjects)

            } catch(error) {
                setIsLoading(false)
                setIsError(error)
                console.log('Unexpected error', error);
            }
        }

        getNews();
    }, []);


// ______________________________________________________________________________________ //

    const openSidebar = () =>{
        setIsSidebar(true);
    };

    const closeSidebar = () => {
        setIsSidebar(false);
    };

    // function change params url
    const changeCategoryNews = (category) => {
        setCategoryNews(category);
        setIsSidebar(false)
    }

    const randomAllNews = shuffleArray(newsData);
    const randomCategoryNews = shuffleArray(data);

    return (
        <AppContext.Provider value={{
            isSidebar, openSidebar, closeSidebar,
            isLoading, isError, randomAllNews,
            data, randomCategoryNews, categoryLoading, categoryError, changeCategoryNews
        }}>
            {children}
        </AppContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(AppContext);
}

AppProvider.propTypes = {
    children: PropTypes.any
}