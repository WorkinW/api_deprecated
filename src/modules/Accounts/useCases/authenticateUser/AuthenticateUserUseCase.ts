import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { v4 as uuidv4 } from "uuid";

import { AppError } from "@shared/errors/AppError";

interface IRequest {
  email: string;
  password: string;
  isAdmin?: boolean;
}

interface IResponse {
  user: {
    id: string;
    name: string;
    email: string;
    isAdmin?: boolean;
  };
  token: string;
  refreshToken: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("Email or password incorrect!");
    }

    const passwordMatch = await compare(password, user.password);

    if (!passwordMatch) {
      throw new AppError("Email or password incorrect!");
    }

    const token = sign({}, "a574b5f09e2e3ecd37dc7345d5856457", {
      subject: user.id,
      expiresIn: "1d",
    });

    const refreshToken = uuidv4();

    const tokenReturn: IResponse = {
      token,
      refreshToken,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        isAdmin: user.is_admin,
      },
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
