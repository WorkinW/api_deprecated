import { ICreateUserDTO } from "../dtos/ICreateUserDTO";
import { ISearchUsersDTO } from "../dtos/ISearchUsersDTO";
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
    company_id,
  }: ICreateUserDTO): Promise<User>;
  update({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    isAdmin,
    company_id,
  }: ICreateUserDTO): Promise<void>;
  findByEmail(email: string): Promise<User>;
  findById(id: string): Promise<User>;
  findAllNonAdminUsers({
    user_id,
    name,
    cpf,
  }: ISearchUsersDTO): Promise<User[]>;
}

export { IUsersRepository };
