import { UserCreationDTO, UserCreationDTOOmit } from "@dtos/UserCreateDTO";
import { api } from "@services/API";

export async function UserCreation({
  name,
  email,
  password
}: UserCreationDTOOmit) {
  try {
    await api.post("/users", {
      name,
      email,
      password,
      avatar: "https://api.lorem.space/image/face?w=640&h=480&r=867"
    });
  } catch (error) {
    throw error;
  }
}
