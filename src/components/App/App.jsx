import { useState, useEffect } from "react";
// import css from "./App.module.css";
import ImageGallery from "../ImageGallery/ImageGallery";
import SearchBar from "../SearchBar/SearchBar";
import { getImages } from "../../unsplash-api";
import ImageModal from "../ImageModal/ImageModal";

export default function App() {
    const [images, setImages] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);
    const [page, setPage] = useState(1);
    const [searchQuery, setSearchQuery] = useState("");
    const [modalIsOpen, setIsOpen] = useState(false);
    const [selectedImage, setSelectedImage] = useState("");

    useEffect(() => {
        if (searchQuery.trim() === "") {
            return;
        }

        async function fetchImages() {
            try {
                setIsLoading(true);
                setIsError(false);
                const results = await getImages(searchQuery, page);
                setImages((prevState) => [...prevState, ...results]);
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

    //modal - window
    const openModal = (imageUrl) => {
        setSelectedImage(imageUrl)
        setIsOpen(true);
    }

    const closeModal = () => {
        setSelectedImage("");
        setIsOpen(false);
    }


    return (
        <>
            <SearchBar onSearch={handleSearch}/>
            
            {isError && <p>Oops, I did it again</p> }
            {images.length > 0 && <ImageGallery items={images} onImageClick={openModal} />}
            {images.length > 0 && !isLoading && <button onClick={handleLoadMore}>Load more</button>}
            {isLoading && <p>Loading, please wait</p>}

            <ImageModal
                isOpen={modalIsOpen}
                onClose={closeModal}
                imageUrl={selectedImage}
            />
            
        </>   
    )
}