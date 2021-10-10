import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { User } from "../infra/typeorm/entities/User";

interface IUsersRepository {
  create({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    isAdmin,
  }: ICreateUserDTO): Promise<User>;
  update({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    isAdmin,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
}

export { IUsersRepository };
