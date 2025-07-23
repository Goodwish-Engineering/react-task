import axios from "axios";

const API_URL="https://jsonplaceholder.typicode.com";

export const fetchPosts=async()=>{
    const res=await axios.get(`${API_URL}/posts`);
    return res.data;
}

export const fetchPostById=async(id)=>{
    const res=await axios.get(`${API_URL}/posts/${id}`);
    return res.data;
}