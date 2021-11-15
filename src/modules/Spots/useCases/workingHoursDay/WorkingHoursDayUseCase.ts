import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
}

type TimeSpots = {
  hours: string;
  minutes: number;
};

@injectable()
class WorkingHoursDayUseCase {
  constructor(
    @inject("SpotsRepository")
    private spotsRepository: ISpotsRepository
  ) { }

  async execute({ user_id }: IRequest): Promise<TimeSpots> {
    const spots = await this.spotsRepository.findAllByUserId({ user_id });
    const allMinutesDay = [];
    const today = new Date();

    spots.map(function (spot) {
      if (spot.created_at.getDate() === today.getDate()) {
        allMinutesDay.push({
          time: spot.time_course,
        });
      }
    });

    const minutes = allMinutesDay.reduce(function (prevVal, elem) {
      return parseInt(prevVal) + parseInt(elem.time);
    }, 0);

    const converter = (minutes) => {
      const horas = Math.floor(minutes / 60);
      const min = minutes % 60;
      const textHours = `00${horas}`.slice(-2);
      const textMinutes = `00${min}`.slice(-2);

      return `${textHours}:${textMinutes}`;
    };

    console.log(minutes, converter(minutes));
    
    return {
      hours: converter(minutes),
      minutes,
    };
  }
}

export { WorkingHoursDayUseCase };
