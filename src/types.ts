export interface Reactions {
  likes: number;
  dislikes: number;
}

export interface Blog {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: Reactions;
  views: number;
  userId: number;
}

export interface BlogsResponse {
  blogs: Blog[];
  limit: number;
}
