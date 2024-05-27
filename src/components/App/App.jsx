import { useState, useEffect } from "react";
// import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../unsplash-api";

export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    // useEffect(() => {
    //     async function fetchImages() {
    //         try {
    //             setIsLoading(true);
    //             setIsError(false);
    //             setImages([]);
    //             const fetchedImages = await getImages("javascript");
    //             setImages(fetchedImages);
    //         } catch (error) {
    //             setIsError(true);
    //         } finally {
    //             setIsLoading(false);
    //         }
    //     }
    //     fetchImages();
    // }, []);
    
    const handleSearch = () => {}

    return (
        <>
            <SearchBar onSearch={handleSearch} />
            {isLoading && <p>Loading, please wait</p>}
            {isError && <p>Oops, I did it again</p> }
            {images.length > 0 && <ImageGallery items={images} />}
        </>   
    )
}