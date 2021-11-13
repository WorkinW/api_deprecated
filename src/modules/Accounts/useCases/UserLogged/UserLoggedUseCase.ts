import { User } from "@modules/Accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  user_id: string;
}

@injectable()
class UserLoggedUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<User> {
    const user = await this.usersRepository.findById(user_id);

    if (!user) {
      throw new AppError("User not found");
    }

    return user;
  }
}

export { UserLoggedUseCase };
