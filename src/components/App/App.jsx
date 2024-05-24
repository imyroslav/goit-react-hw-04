import axios from "axios";
import ArticleList from "../ArticleList/ArticleList";
import { useEffect, useState } from "react";


export default function App() {
    const [articles, setArticles] = useState([]);
    useEffect(() => {
        async function fetchArticles() {
            const response = await axios.get(
                "http://hn.algolia.com/api/v1/search?query=react"
            );
            setArticles(response.data.hits)
            console.log(response.data.hits)
        }

        fetchArticles();
}, []);
        


    return (
        <>
            <h1>HTTP requests in React</h1>
            <ArticleList items={articles} />
        </>
    )
        
    

    
        
    
}