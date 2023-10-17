import { create } from "zustand";

interface StoreStates {
  language: string;
  token: string;
  isAuthenticated: boolean;
  setLanguage: (language: string) => void;
  setToken: (token: string) => void;
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

const authData = create<StoreStates>(
  (set): StoreStates =>
    <StoreStates>{
      language: "",
      token: "",
      isAuthenticated: false,
      setLanguage: (language: string) =>
        set((state) => ({ ...state, language })),
      setToken: (token: string) => set((state) => ({ ...state, token })),
      setIsAuthenticated: (isAuthenticated: boolean) =>
        set((state) => ({ ...state, isAuthenticated })),
    }
);

export default authData;
