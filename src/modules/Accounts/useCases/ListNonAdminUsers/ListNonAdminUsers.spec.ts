import { UsersRepositoryInMemory } from "@modules/Accounts/repositories/in-memory/UsersRepositoryInMemory";

import { ListNonAdminUsersUseCase } from "./ListNonAdminUsersUseCase";

let listNonAdminUsersUseCase: ListNonAdminUsersUseCase;
let usersRepositoryInMemory: UsersRepositoryInMemory;

describe("List Users if user logged is admin", () => {
  beforeEach(() => {
    usersRepositoryInMemory = new UsersRepositoryInMemory();
    listNonAdminUsersUseCase = new ListNonAdminUsersUseCase(
      usersRepositoryInMemory
    );
  });

  it("should be able to list all users of your company", async () => {
    for (let i = 0; i < 10; i++) {
      const randomString = Math.random().toString(36).substring(7);
      const randomNumber = Math.floor(Math.random() * 1000).toString();

      usersRepositoryInMemory.create({
        name: randomString,
        username: randomString,
        email: `${randomString}@gmail.com`,
        password: "123456",
        cpf: randomNumber,
        isAdmin: false,
        avatar: null,
        company_id: "4cd5b8d6-1a7a-4de7-a294-d84efaa70d77",
      });

      usersRepositoryInMemory.create({
        name: randomString,
        username: randomString,
        email: `${randomString}@gmail.com`,
        password: "123456",
        cpf: randomNumber,
        isAdmin: true,
        avatar: null,
        company_id: "4cd5b8d6-1a7a-4de7-a294-d84efaa70d77",
      });
    }

    const users = await listNonAdminUsersUseCase.execute();
    console.log(users);
  });
});
