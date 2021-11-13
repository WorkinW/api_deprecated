import { Request, Response } from "express";
import { container } from "tsyringe";

import { RefreshTokenAuthenticateUserUseCase } from "./RefreshTokenAuthenticateUserUseCase";

class RefreshTokenAuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, refreshToken } = request.body;

    const refreshTokenAuthenticateUserUseCase = container.resolve(
      RefreshTokenAuthenticateUserUseCase
    );

    const token = await refreshTokenAuthenticateUserUseCase.execute({
      refreshToken,
      email,
    });

    return response.json(token);
  }
}

export { RefreshTokenAuthenticateUserController };
