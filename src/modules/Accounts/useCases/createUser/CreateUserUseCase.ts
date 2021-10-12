import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { User } from "@modules/Accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

@injectable()
class CreateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({
    name,
    username,
    email,
    password,
    cpf,
    avatar,
    isAdmin,
    company_id,
  }: ICreateUserDTO): Promise<User> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHas = await hash(password, 8);

    const user = await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHas,
      cpf,
      avatar,
      isAdmin,
      company_id,
    });

    return user;
  }
}

export { CreateUserUseCase };
