import css from "./ImageCard.module.css";


export default function ImageCard({ images: { urls, description }, onClick }) { 
    
    const handleClick = () => {
        onClick(urls.regular);
    };

    return (
        <img
            className={css.img}
            src={urls.small}
            alt={description}
            onClick={handleClick}
        />
        

    )
}