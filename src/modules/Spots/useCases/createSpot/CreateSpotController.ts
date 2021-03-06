import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateSpotUseCase } from "./CreateSpotUseCase";

class CreateSpotController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { company_id, time_position } = request.body;
    const { id } = request.user;
    const createSpotUseCase = container.resolve(CreateSpotUseCase);

    await createSpotUseCase.execute({
      user_id: id,
      company_id,
      time_position,
    });

    return response.status(201).send();
  }
}

export { CreateSpotController };
