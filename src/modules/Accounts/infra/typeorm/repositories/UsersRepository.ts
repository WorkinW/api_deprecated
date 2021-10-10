import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { getRepository, Repository } from "typeorm";

import { User } from "../entities/User";

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = getRepository(User);
  }

  async create({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    isAdmin,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      cpf,
      avatar,
      isAdmin,
    });

    await this.repository.save(user);

    return user;
  }

  async update({
    id,
    name,
    username,
    email,
    password,
    cpf,
    avatar,
  }: ICreateUserDTO): Promise<void> {
    await this.repository.save({
      id,
      name,
      username,
      email,
      password,
      cpf,
      avatar,
    });
  }

  async findByEmail(email: string): Promise<User> {
    const user = await this.repository.findOne({ email });
    return user;
  }

  async findById(id: string): Promise<User> {
    const user = await this.repository.findOne(id);
    return user;
  }
}

export { UsersRepository };
