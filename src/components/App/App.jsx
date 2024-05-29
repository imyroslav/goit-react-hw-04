import { useState, useEffect } from "react";
// import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../unsplash-api";

export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return;
        }

        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const data = await getImages(searchQuery, page);
                setImages((prevState) => [...prevState, ...data]);
            } catch (error) {
                setIsError(true);
            } finally {
                setIsLoading(false);
            }
        }

        fetchImages();
     }, [searchQuery, page]);
    
    
    const handleSearch = async (searchWord) => {
        setSearchQuery(searchWord);
        setPage(1);
        setImages([]);
    };
    
    const handleLoadMore = async () => {
        setPage(page + 1);
    }

    return (
        <>
            <SearchBar onSearch={handleSearch}/>
            
            {isError && <p>Oops, I did it again</p> }
            {images.length > 0 && <ImageGallery items={images} />}
            {images.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more</button>}
            {isLoading && <p>Loading, please wait</p>}
            
        </>   
    )
}