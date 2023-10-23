import { useState, useEffect } from "react";
import { createClient } from "contentful"

const useFetchSingleCategory = (keyword) => {
    const [data, setData] = useState([])
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(false)

    const client = createClient({
        space: import.meta.env.VITE_SPACE_ID_KEY,
        environment: 'master',
        accessToken: import.meta.env.VITE_ACCESS_TOKEN_KEY
    });

    useEffect(() => {

        let fetchCategory = async (keyword) => {
            setLoading(true);
            try {
                const response = await client.getEntries({ content_type: `${keyword}` });

                const newProjects = response.items.map((item) => {
                    const id = item?.sys?.id;
                    const { title, url, description, date, author, source, image } = item.fields.parentPage.fields
                    const urlToImage = image?.fields?.file?.url;

                    return { id, title, url, description, urlToImage, date, author, source }
                });

                setLoading(false);
                setData(newProjects)

            } catch (error) {
                setLoading(false);
                setError(error)
            }
        }

        fetchCategory(keyword);

    }, [keyword]);
    
    return { data, error, loading }
}

export default useFetchSingleCategory;