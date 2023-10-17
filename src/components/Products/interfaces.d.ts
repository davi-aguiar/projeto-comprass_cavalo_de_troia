export type Product = {
  id: string;
  title: string;
  price: number;
  category: { name: string };
  images: { uri: string }[];
};
