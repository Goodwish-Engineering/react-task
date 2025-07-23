import { useEffect, useState } from "react";
import axios from "axios";

//url of blogs:https://jsonplaceholder.typicode.com/posts
//url of a single blog:https://jsonplaceholder.typicode.com/posts/{id}
 

const useFetch = (url) => {

    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);
    const getBlogs = async () => {
        try {
            setLoading(true);
            setError(null);
            const { data } = await axios.get(url);
            setData(data);

        } catch (error) {
            console.log(error?.message)
            setError(error?.message)
        } finally {

            setLoading(false);
        }
        console.log(error?.message);
    }
    useEffect(() => {
        getBlogs();
    }, [url])

    return { data, error, loading }

};
export default useFetch;