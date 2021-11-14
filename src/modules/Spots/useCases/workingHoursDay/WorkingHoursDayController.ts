import { Response, Request } from "express";
import { container } from "tsyringe";

import { WorkingHoursDayUseCase } from "./WorkingHoursDayUseCase";

class WorkingHoursDayController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const workingHoursDayUseCase = container.resolve(WorkingHoursDayUseCase);

    const timesSpots = await workingHoursDayUseCase.execute({ user_id: id });

    return response.json(timesSpots).status(200);
  }
}

export { WorkingHoursDayController };
