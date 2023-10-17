import { create } from "zustand";

interface StoreStates {
  language: string;
  token: string;
  isAuthenticated: boolean;
  setLanguage: (language: string) => void;
  setToken: (token: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const useStoreData = create<StoreStates>(
  (set): StoreStates =>
    <StoreStates>{
      language: "",
      token:
        "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOjEzLCJpYXQiOjE2OTc0ODAyMjgsImV4cCI6MTY5OTIwODIyOH0.z9J7CtBxBBVjBjaSKSeJwBbSOc_AIWgZwN3MLNR-3BA",
      isAuthenticated: true,
      setLanguage: (language: string) =>
        set((state) => ({ ...state, language })),
      setToken: (token: string) => set((state) => ({ ...state, token })),
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set((state) => ({ ...state, isAuthenticated })),
    }
);

export default useStoreData;
