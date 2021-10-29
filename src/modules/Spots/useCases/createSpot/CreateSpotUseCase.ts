import { Spot } from "@modules/Spots/infra/typeorm/entities/Spot";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { inject, injectable } from "tsyringe";
import { EnumType } from "typescript";

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
  constructor(private spotsRepository: ISpotsRepository) { }
  async execute({
    user_id,
    company_id,
    time_position,
  }: IRequest): Promise<Spot> {
    const spot = await this.spotsRepository.findByTimePosition(user_id);
    let timePosition: Position;

    if (!spot) {
      timePosition = Position.Exit;
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

    const newSpot = await this.spotsRepository.create({
      user_id,
      company_id,
      time_position: timePosition,
    });

    return newSpot;
  }
}

export { CreateSpotUseCase };
