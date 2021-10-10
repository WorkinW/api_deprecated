import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserUseCase } from "./CreateUserUseCase";

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, username, email, password, cpf, avatar, isAdmin } =
      request.body;
    const createUserUseCase = container.resolve(CreateUserUseCase);

    const user = await createUserUseCase.execute({
      name,
      username,
      email,
      password,
      cpf,
      avatar,
      isAdmin,
    });

    return response.status(201).json(user);
  }
}

export { CreateUserController };
