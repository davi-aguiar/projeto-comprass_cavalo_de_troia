export type UserCreationDTO = {
  name: string;
  email: string;
  password: string;
  avatar: string;
};

export type UserCreationDTOOmit = Omit<UserCreationDTO, "avatar">;

type OmitNameAndAvatar = Omit<UserCreationDTO, "name" | "avatar">;
