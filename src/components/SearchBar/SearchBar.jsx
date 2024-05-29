
import css from "./SearchBar.module.css";

export default function SearchBar({ onSearch }) {

    
    const handleSubmit = (event) => {
        event.preventDefault();
        
        const form = event.target;
        const searchWord = form.elements.searchWord.value;
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
                <button className={css.button} type="submit">Search</button>
  
                </form>
            </header>
        
        
        

    )
}