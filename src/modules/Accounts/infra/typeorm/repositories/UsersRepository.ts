import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { ISearchUsersDTO } from "@modules/Accounts/dtos/ISearchUsersDTO";
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
    company_id,
  }: ICreateUserDTO): Promise<User> {
    const user = this.repository.create({
      name,
      username,
      email,
      password,
      cpf,
      avatar,
      isAdmin,
      company_id,
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
    company_id,
  }: ICreateUserDTO): Promise<void> {
    await this.repository.save({
      id,
      name,
      username,
      email,
      password,
      cpf,
      avatar,
      company_id,
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

  async findAllNonAdminUsers({
    user_id,
    name,
    cpf,
  }: ISearchUsersDTO): Promise<User[]> {
    const user = await this.repository.findOne(user_id);
    const company_id = user.company_id;

    const usersQuery = await this.repository
      .createQueryBuilder("users")
      .where("users.company_id = :company_id", {
        company_id,
      })
      .andWhere("users.isAdmin = false");

    if (name) {
      usersQuery.andWhere("users.name like :name", {
        name: `%${name}%`,
      });
    }

    if (cpf) {
      usersQuery.andWhere("users.cpf like :cpf", {
        cpf: `%${cpf}%`,
      });
    }

    const users = await usersQuery.getMany();

    return users;
  }
}

export { UsersRepository };
