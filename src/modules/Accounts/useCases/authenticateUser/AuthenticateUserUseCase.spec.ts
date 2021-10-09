import { AppError } from "@errors/AppError";
import { ICreateUserDTO } from "@modules/Accounts/dtos/ICreateUserDTO";
import { UsersRepositoryInMemory } from "@modules/Accounts/repositories/in-memory/UsersRepositoryInMemory";

import { CreateUserUseCase } from "../createUser/CreateUserUseCase";
import { AuthenticateUserUseCase } from "./AuthenticateUserUseCase";

let authenticateUserUseCase: AuthenticateUserUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;
let createUserUseCase: CreateUserUseCase;

describe("Authenticate User", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    authenticateUserUseCase = new AuthenticateUserUseCase(
      usersRepositoryInMemory
    );
    createUserUseCase = new CreateUserUseCase(usersRepositoryInMemory);
  });

  it("Should be able to authenticate an user", async () => {
    const user: ICreateUserDTO = {
      name: "John Doe",
      email: "john@gmail.com",
      username: "johndoe",
      password: "123456",
      cpf: "40342262858105",
    };

    await createUserUseCase.execute(user);

    const result = await authenticateUserUseCase.execute({
      email: user.email,
      password: user.password,
    });

    expect(result).toHaveProperty("token");
  });

  it("should not be alble to auththenticate an non existed user", () => {
    expect(async () => {
      await authenticateUserUseCase.execute({
        email: "john@gmail.com",
        password: "123456e",
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be alble to auththenticate an non existed user with password incorrect", () => {
    expect(async () => {
      const user: ICreateUserDTO = {
        name: "John Doe",
        email: "john@gmail.com",
        username: "johndoe",
        password: "123456",
        cpf: "40342262858105",
      };

      await createUserUseCase.execute(user);

      await authenticateUserUseCase.execute({
        email: user.email,
        password: "123456e",
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
