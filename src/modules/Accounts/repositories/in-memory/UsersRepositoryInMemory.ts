import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { User } from "../../infra/typeorm/entities/User";
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
  }: ICreateUserDTO): Promise<void> {
    const user = new User();

    Object.assign(user, {
      name,
      username,
      email,
      password,
      cpf,
      avatar,
    });

    this.users.push(user);
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
}

export { UsersRepositoryInMemory };
