import { UsersRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { NextFunction, Request, Response } from "express";

import { AppError } from "@shared/errors/AppError";

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { id } = request.user;

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user) {
    throw new AppError("You must be logged in");
  }

  if (!user.is_admin) {
    throw new AppError("You must be an admin");
  }

  return next();
}
