import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import { AppError } from "@shared/errors/AppError";

type RefreshTokensStore = Map<string, string[]>;

interface IRequest {
  email: string;
  refreshToken: string;
}

interface IResponse {
  newRefreshToken: string;
  isAdmin: boolean;
}

@injectable()
class RefreshTokenAuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, refreshToken }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found.");
    }

    if (!refreshToken) {
      throw new AppError("Refresh token is required.");
    }

    const newRefreshToken = sign({}, "a574b5f09e2e3ecd37dc7345d5856457", {
      subject: user.id,
      expiresIn: "1d",
    });

    const tokenReturn: IResponse = {
      newRefreshToken,
      isAdmin: user.is_admin,
    };

    return tokenReturn;
  }
}

export { RefreshTokenAuthenticateUserUseCase };
