export interface Post {
  id: number;
  title: string;
  body: string;
  tags?: string[];
  reactions?: {
    likes: number;
    dislikes: number;
  };
  views?: number;
  userId: number;
}

export interface Author {
  id: number;
  firstName: string;
  lastName: string;
  email: string
  image: string;
}

export interface PostResponse {
  posts: Post[];
  total: number;
  skip: number;
  limit: number;
}

export interface BlogState {
  posts: Post[];
  selectedPost: Post | null;
  selectedAuthor: Author | null;
  filteredPosts: Post[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  currentPage: number;
  totalPosts?: number;
  showModal: boolean;
}
