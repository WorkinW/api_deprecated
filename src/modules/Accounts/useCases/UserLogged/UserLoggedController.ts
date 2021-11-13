import { Request, Response } from "express";
import { container } from "tsyringe";

import { UserLoggedUseCase } from "./UserLoggedUseCase";

class UserLoggedController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;
    const userLoggedUseCase = container.resolve(UserLoggedUseCase);

    const user = await userLoggedUseCase.execute({ user_id: id });

    return response.status(201).json(user);
  }
}

export { UserLoggedController };
