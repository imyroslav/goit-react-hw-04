// import { useEffect, useState } from "react";
// import axios from "axios";
import css from "./SearchBar.module.css";


export const SearchBar = ({ onSearch }) => {
    
    const handleSubmit = (event) => {
        event.preventDefault();
        const form = event.target;
        const topic = form.element.topic.value;
        

        if (form.element.imageName.value.trim() === "") {
            alert("please enter image name")
            console.log("empty field")
            return;
        }

        onSearch(topic);

        form.reset();
    };

    return (
        
        <form className={css.bar} onSubmit={handleSubmit}>
                <input
                    type="text"
                    name="topic"
                    autoComplete="off"
                    autoFocus
                placeholder="Search images and photos"
                value={topic}
                />
                <button>Search</button>
            </form>
        

    )
};


export default SearchBar;