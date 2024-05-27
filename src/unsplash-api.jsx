import axios from "axios";

axios.defaults.baseURL = "http://hn.algolia.com/api/v1";

export const getImages = async (searchWord) => { 
    const result = await axios.get(`/search?query=${searchWord}`);
    return result.data.hits;
};