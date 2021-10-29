import { Spot } from "@modules/Spots/infra/typeorm/entities/Spot";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { inject, injectable } from "tsyringe";

enum Position {
  Entry = "entry",
  Exit = "exit",
}
interface IRequest {
  user_id: string;
  company_id: string;
  time_position: Position;
}

@injectable()
class CreateSpotUseCase {
  constructor(
    @inject("SpotsRepository")
    private spotsRepository: ISpotsRepository,
    @inject("DayjsDateProvider")
    private dateProvider: IDateProvider
  ) { }
  async execute({
    user_id,
    company_id,
    time_position,
  }: IRequest): Promise<Spot> {
    const spot = await this.spotsRepository.findByTimePosition(user_id);
    let compare: number;
    let timePosition: Position;

    if (!spot) {
      timePosition = Position.Entry;
    }

    if (time_position) {
      timePosition = time_position;
    }

    if (spot && spot.time_position == "entry") {
      timePosition = Position.Exit;
    }

    if (spot && spot.time_position == "exit") {
      timePosition = Position.Entry;
    }

    if (spot) {
      const dateNow = this.dateProvider.dateNow();
      const spotDate = spot.created_at;
      compare = this.dateProvider.compareInHours(dateNow, spotDate);
    }

    const newSpot = await this.spotsRepository.create({
      user_id,
      company_id,
      time_course: compare ? compare : 0,
      time_position: timePosition,
    });

    return newSpot;
  }
}

export { CreateSpotUseCase };
