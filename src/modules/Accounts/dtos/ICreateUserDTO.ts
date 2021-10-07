interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
  id?: string;
  avatar?: string;
}

export { ICreateUserDTO };
