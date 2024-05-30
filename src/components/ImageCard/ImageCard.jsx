import css from "./ImageCard.module.css";


export default function ImageCard({
    
    images: { urls, description }
}) { 

    return (
        <img
            className={css.img}
            src={urls.small}
            alt={description}
        />
        

    )
}