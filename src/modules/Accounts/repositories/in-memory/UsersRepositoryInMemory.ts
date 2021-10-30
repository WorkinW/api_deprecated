import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { User } from "@modules/Accounts/infra/typeorm/entities/User";

import { IUsersRepository } from "../IUsersRepository";

class UsersRepositoryInMemory implements IUsersRepository {
  users: User[] = [];

  async create({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    is_admin,
    company_id,
  }: ICreateUserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      email,
      password,
      cpf,
      avatar,
      is_admin,
      company_id,
    });

    this.users.push(user);

    return user;
  }

  update({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    throw new Error("Method not implemented.");
  }

  async findByEmail(email: string): Promise<User> {
    return this.users.find((user) => user.email === email);
  }

  async findById(id: string): Promise<User> {
    return this.users.find((user) => user.id === id);
  }

  async findAllNonAdminUsers(): Promise<User[]> {
    return this.users.filter((user) => !user.is_admin);
  }
}

export { UsersRepositoryInMemory };
