import css from "./LoadMoreBtn.module.css";


export default function LoadMoreBtn({ onClick }) {
    return (
        <button className={css.lmbtn} type="button" onClick={onClick} >
            More images
        </button>
    );
}