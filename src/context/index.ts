import { create } from "zustand";

interface StoreStates {
  name: string;
  email: string;
  setEmail: (email: string) => void;
  setName: (name: string) => void;
}

const useStoreData = create<StoreStates>(
  (set): StoreStates =>
    <StoreStates>{
      name: "teste1",
      email: "teste",
      setEmail: (email: string) => set((state) => ({ ...state, email })),
      setName: (name: string) => set((state) => ({ ...state, name }))
    }
);

export default useStoreData;
