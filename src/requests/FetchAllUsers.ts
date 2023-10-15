import { api } from "@services/API";

export const fetchAllUsers = async () => {
  try {
    const response = await api.get("/users");
    return response.data;
  } catch (error) {
    console.error("Failed to fetch users:", error);
    return [];
  }
};
