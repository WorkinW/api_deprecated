import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListNonAdminUsersUseCase } from "./ListNonAdminUsersUseCase";

class ListNonAdminUsersController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { user_id, name, cpf } = request.body;

    const listNonAdminUsersUseCase = container.resolve(
      ListNonAdminUsersUseCase
    );

    const users = await listNonAdminUsersUseCase.execute({
      user_id,
      name,
      cpf,
    });

    return response.json(users);
  }
}

export { ListNonAdminUsersController };
