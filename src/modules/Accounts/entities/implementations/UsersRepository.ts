import { getRepository, Repository } from "typeorm";

import { ICreateUserDTO } from "../../dtos/ICreateUserDTO";
import { IUsersRepository } from "../../repositories/IUsersRepository";
import { User } from "../User";

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
  }: ICreateUserDTO): Promise<void> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      cpf,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
