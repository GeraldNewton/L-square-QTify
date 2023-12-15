import axios from "axios";

export const BACKENDPOINT="https://qtify-backend-labs.crio.do/";

export const fetchTopAlbums=async()=>{
    try{
        const response=await axios.get(`${BACKENDPOINT}albums/top`);
        return response.data;

    }catch(e){
        console.error(e);
    }
}

export const fetchNewAlbums=async()=>{
    try{
        const response=await axios.get(`${BACKENDPOINT}albums/new`);
        return response.data;

    }catch(e){
        console.error(e);
    }
}

export const fetchFilters=async()=>{
    try{
        const response=await axios.get(`${BACKENDPOINT}genres`);
        return response.data;

    }catch(e){
        console.error(e);
    }
}

export const fetchSongs=async()=>{
    try{
        const response=await axios.get(`${BACKENDPOINT}songs`);
        return response.data;

    }catch(e){
        console.error(e);
    }
}