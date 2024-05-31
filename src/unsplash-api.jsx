import axios from "axios";

axios.defaults.baseURL = "https://api.unsplash.com";

export const getImages = async (searchWord, currentPage) => { 
    const result = await axios.get(`/search/photos`, {
        params: {
            query: searchWord,
            page: currentPage,
            per_page: 12
        },

        headers: {
            Authorization: "Client-ID EA9CV8mw7EN6wwLh45_8uC3l9z6HtFJZ1SXqG58R4n0" 
        }
    });
    return result.data;
};