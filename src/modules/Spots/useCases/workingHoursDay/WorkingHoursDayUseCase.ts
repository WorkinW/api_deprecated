import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
}

type TimeSpots = {
  hours: string;
};

@injectable()
class WorkingHoursDayUseCase {
  constructor(
    @inject("SpotsRepository")
    private spotsRepository: ISpotsRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<TimeSpots> {
    const spots = await this.spotsRepository.findAllByUserId({ user_id });

    const minutes = spots.reduce(function (prevVal, elem) {
      return prevVal + elem.time_course;
    }, 0);

    const converter = (minutes) => {
      const horas = Math.floor(minutes / 60);
      const min = minutes % 60;
      const textHours = `00${horas}`.slice(-2);
      const textMinutes = `00${min}`.slice(-2);

      return `${textHours}:${textMinutes}`;
    };

    return {
      hours: converter(minutes),
    };
  }
}

export { WorkingHoursDayUseCase };
