"use client";

import { create } from "zustand";
import axios from "axios";

type Comment = {
  id: number;
  name: string;
  email: string;
  body: string;
};

type State = {
  items: Comment[];
  loading: boolean;
  error: string | null;
  fetchComments: (postId: number) => Promise<void>;
};

export const useComments = create<State>((set) => ({
  items: [],
  loading: false,
  error: null,
  fetchComments: async (postId: number) => {
    try {
      set({ loading: true, error: null });
      const { data } = await axios.get<Comment[]>(
        `https://jsonplaceholder.typicode.com/posts/${postId}/comments`
      );
      set({ items: data });
    } catch (err: unknown) {
      if (err instanceof Error) {
        set({ error: err.message });
      } else {
        set({ error: "เกิดข้อผิดพลาดไม่ทราบสาเหตุ" });
      }
    } finally {
      set({ loading: false });
    }
  },
}));
