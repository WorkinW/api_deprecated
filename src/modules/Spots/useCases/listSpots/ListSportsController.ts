import { Spot } from "@modules/Spots/infra/typeorm/entities/Spot";
import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListSpotsUseCase } from "./ListSpotsUseCase";

class ListSportsController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const listSpotUseCase = container.resolve(ListSpotsUseCase);

    const spots = await listSpotUseCase.execute({
      user_id: id,
    });

    return response.json(spots);
  }
}

export { ListSportsController };
