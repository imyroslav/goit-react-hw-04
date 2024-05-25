import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const field = event.target;
        const searchWord = field.elements.searchWord.value;

        if (searchWord.trim() === '') {
            toast("Please enter search word!", {
                style: {
                    color: "red",
                },
            });
            return;
        }

        onSearch(searchWord);
        field.reset();
    };

    return (
        <header className={css.header}>
            <form className={css.form} onSubmit={handleSubmit}>
                <input
                    className={css.input}
                    type="text"
                    name="searchWord"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">
                    Search
                </button>
                <Toaster />
            </form>
        </header>
    );
}

