import { create } from 'zustand'

interface BlogStore {
    page: number;
    search: string;
    setPage: (page: number) => void;
    setSearch: (search: string) => void;
}

export const useBlogStore = create<BlogStore>((set) => ({
    page: 1,
    search: "",
    setPage: (page: number) => set({ page }),
    setSearch: (search: string) => set({ search, page: 1 }),
}))
