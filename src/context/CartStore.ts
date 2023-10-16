import { api } from "@services/API";
import { create } from "zustand";

type Item = {
  category: {
    creationAt: string;
    id: number;
    image: string;
    name: string;
    updatedAt: string;
  };
  creationAt: string;
  description: string;
  id: string;
  images: string[];
  price: number;
  title: string;
  updatedAt: string;
};

type CartStore = {
  availableItems: Item[];
  cart: Item[];
  addToCart: (item: Item) => void;
  removeFromCart: (id: string) => void;
};

export const useCartStore = create<CartStore>((set) => ({
  cart: [],
  availableItems: [],

  addToCart: (item) => set((state) => ({ cart: [...state.cart, item] })),

  removeFromCart: (id) =>
    set((state) => ({ cart: state.cart.filter((item) => item.id !== id) })),

  fetchAvailableItems: async () => {
    try {
      const response = api.getProductData(0);
      if (response) {
        const data: Item[] = await response;
        set({ availableItems: data });
      } else {
        console.error("Failed to fetch data");
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  }
}));
