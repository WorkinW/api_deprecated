import { AppError } from "@shared/errors/AppError";
import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

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
  }: ICreateUserDTO): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError("User already exists!");
    }

    const passwordHas = await hash(password, 8);

    await this.usersRepository.create({
      name,
      username,
      email,
      password: passwordHas,
      cpf,
      avatar,
    });
  }
}

export { CreateUserUseCase };
