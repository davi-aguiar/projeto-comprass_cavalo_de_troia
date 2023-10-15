import { api } from "@services/API";

export const updatePassword = async (id: any, newPassword: any) => {
  try {
    await api.put(`/users/${id}`, { password: newPassword });
  } catch (error) {
    console.error("Failed to update password:", error);
  }
};
