import { Spot } from "@modules/Spots/infra/typeorm/entities/Spot";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { inject, injectable } from "tsyringe";

import { IDateProvider } from "@shared/container/providers/DateProvider/IDateProvider";
import { AppError } from "@shared/errors/AppError";

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
    const lastSpot = await this.spotsRepository.findByLastSpot(user_id);
    let compare: number;

    if (spot) {
      if (lastSpot.time_position == time_position) {
        throw new AppError(
          "The last point registered is the same that is being registered now, are you sure about that?"
        );
      }
    }

    if (spot && time_position == "exit") {
      const dateNow = this.dateProvider.dateNow();
      const spotDate = lastSpot.created_at;
      compare = this.dateProvider.compareInHours(dateNow, spotDate);
      compare =
        parseInt(spot.time_course.toString()) + parseInt(compare.toString());
    }

    const newSpot = await this.spotsRepository.create({
      user_id,
      company_id,
      time_course: compare ? compare : 0,
      time_position: time_position,
    });

    return newSpot;
  }
}

export { CreateSpotUseCase };
