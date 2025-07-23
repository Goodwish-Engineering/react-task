import axios from "axios";
import type { Author, Post } from "../types/blog";

const BASE_URL = "https://dummyjson.com";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?limit=150`);
    // console.log( 'resp data post', response?.data.posts);

    return response?.data?.posts;
  } catch (error: any) {
    console.log(error);
    throw new Error(
      `Failed to fetch Posts: ${error.response?.status} - ${error.response?.statusText}`
    );
  }
};

export const fetchAuthor = async (userId: number): Promise<Author> => {
  try {
    const response = await fetch(`${BASE_URL}/users/${userId}`);
    return await response.json();
  } catch (error: any) {
    throw new Error(
      `Failed to fetch author: ${error.response?.status} - ${error.response?.statusText}`
    );
  }
};
