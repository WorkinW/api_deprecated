import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../entities/User";

interface IUsersRepository {
  create({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
  }: ICreateUserDTO): Promise<void>;
  update({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
