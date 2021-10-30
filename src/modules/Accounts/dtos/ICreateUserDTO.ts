interface ICreateUserDTO {
  name: string;
  username: string;
  email: string;
  password: string;
  cpf: string;
  id?: string;
  avatar?: string;
  is_admin?: boolean;
  company_id?: string;
}

export { ICreateUserDTO };
