import { useQuery } from "@tanstack/react-query";
import axios from 'axios';
import type { BlogPost } from "../types/blogs.type";
import { useBlogStore } from "../store/blogStore";

export const useFetchBlogs = () => {
  const { page, search } = useBlogStore();
  const limit = 10;

  return useQuery<BlogPost[], Error>({
    queryKey: ["blogs", page, search],
    queryFn: async (): Promise<BlogPost[]> => {
      const response = await axios.get("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _page: page,
          _limit: limit,
        },
      });

      const filtered = response.data.filter((post: BlogPost) =>
        post.title.toLowerCase().includes(search.toLowerCase())
      );

      return filtered;
    },
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};

export const useFetchBlogById = (id: number) => {
  return useQuery<BlogPost, Error>({
    queryKey: ["blog", id],
    queryFn: async (): Promise<BlogPost> => {
      const res = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`);
      console.log(res);
      return res.data;
      
    },
    enabled: !!id,
    staleTime: 1000 * 60 * 5,
    retry: 1,
  });
};