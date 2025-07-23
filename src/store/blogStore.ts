import { create } from "zustand";
import type { Author, BlogState, Post } from "../types/blog";

interface BlogStore extends BlogState {
  setPosts: (posts: Post[]) => void;
  setFilteredPosts: (posts: Post[]) => void;
  setSelectedPost: (post: Post | null) => void;
  setSelectedAuthor: (author: Author | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  setSearchTerm: (term: string) => void;
  setCurrentPage: (page: number) => void;
  setShowModal: (show: boolean) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
  posts: [],
  filteredPosts: [],
  selectedPost: null,
  selectedAuthor: null,
  loading: true,
  error: null,
  searchTerm: '',
  currentPage: 1,
  showModal: false,
  setPosts: (posts) => set({ posts, filteredPosts: posts }),
  setFilteredPosts: (filteredPosts) => set({ filteredPosts }),
  setSelectedPost: (selectedPost) => set({ selectedPost }),
  setSelectedAuthor: (selectedAuthor) => set({ selectedAuthor }),
  setLoading: (loading) => set({ loading }),
  setError: (error) => set({ error }),
  setSearchTerm: (searchTerm) => set({ searchTerm, currentPage: 1 }),
  setCurrentPage: (currentPage) => set({ currentPage }),
  setShowModal: (showModal) => set({ showModal })
}));
