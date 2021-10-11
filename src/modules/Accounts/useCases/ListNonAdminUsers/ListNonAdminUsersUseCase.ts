import { User } from "@modules/Accounts/infra/typeorm/entities/User";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  name: string;
  cpf: string;
}

@injectable()
class ListNonAdminUsersUseCase {
  constructor(
    @inject("UsersRepository") private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id, name, cpf }: IRequest): Promise<User[]> {
    const users = await this.usersRepository.findAllNonAdminUsers({
      user_id,
      name,
      cpf,
    });
    return users;
  }
}

export { ListNonAdminUsersUseCase };
