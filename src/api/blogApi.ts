import axios from "axios";

const blogApi = axios.create({
  baseURL: "https://dummyjson.com/posts",
  timeout: 5000,
});

export const fetchAllBlogs = async () => {
  try {
    const response = await blogApi.get("/?limit=50");
    return response.data.posts;
  } catch (error) {
    console.error("Failed to fetch posts:", error);
    throw error;
  }
};

export const fetchSingleBlog = async (id: string | number) => {
  try {
    const response = await blogApi.get(`/${id}`);
    return response.data;
  } catch (error) {
    console.error(`Failed to fetch post with ID ${id}:`, error);
    throw error;
  }
};

export default blogApi;
