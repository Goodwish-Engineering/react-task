import axios from "axios";
import type { Author, Post } from "../types/blog";

const BASE_URL = "https://dummyjson.com";

export const fetchPosts = async (): Promise<Post[]> => {
  try {
    const response = await axios.get(`${BASE_URL}/posts?limit=150`);
    return response.data.posts;
  } catch (error) {
    console.error("Error fetching posts:", error);
    throw new Error("Failed to fetch posts. Please try again later.");
  }
};

export const fetchAuthor = async (userId: number): Promise<Author> => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching user ${userId}:`, error);
    throw new Error("Failed to fetch author. Please try again later.");
  }
};
