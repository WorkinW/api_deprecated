import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { Spot } from "@modules/Spots/infra/typeorm/entities/Spot";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";

interface IRequest {
  user_id: string;
}

@injectable()
class ListSpotsUseCase {
  constructor(
    @inject("SpotsRepository")
    private spotsRepository: ISpotsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider,
    @inject("UsersRepository")
    private userRepository: IUsersRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<Spot[]> {
    const user = await this.userRepository.findById(user_id);
    const company_id = user.company_id;
    if (user.is_admin) {
      const spots = await this.spotsRepository.findAllSpots({
        user_id,
        company_id,
      });
      return spots;
    }

    const spots = await this.spotsRepository.findAllByUserId({ user_id });

    return spots;
  }
}

export { ListSpotsUseCase };
