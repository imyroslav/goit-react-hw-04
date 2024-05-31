import toast, { Toaster } from "react-hot-toast";
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const searchWord = form.elements.searchWord.value;

        if (searchWord.trim() === "") {
            toast('Please enter search word', {
                    duration: 1500,
                    style: {
                        color: "white",
                        background: "red"
                    },
                })
                return;
            }

        onSearch(searchWord);
        event.target.reset();
        
    
    }
    return (
            <header className={css.header}>
                <form className={css.form} onSubmit={handleSubmit}>
                    <input
                    className={css.input}
                    name="searchWord"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
                <button className={css.btn} type="submit">Search</button>
  
            </form>
            <Toaster />
            </header>
        
        
        

    )
}