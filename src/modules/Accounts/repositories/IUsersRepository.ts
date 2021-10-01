import { ICreateUserDTO } from "../dtos/ICreateUserDTO";

interface IUsersRepository {
  create({
    name,
    username,
    email,
    password,
    cpf,
  }: ICreateUserDTO): Promise<void>;
}

export { IUsersRepository };
