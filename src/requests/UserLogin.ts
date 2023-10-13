import { api } from "@services/API";
import { UserLoginDTO } from "@dtos/UserLoginDTO";

export async function UserLogin({ email, password }: UserLoginDTO) {
  try {
    const response = await api.post("/auth/login", {
      email,
      password
    });

    return response.data;
  } catch (error) {
    throw error;
  }
}
