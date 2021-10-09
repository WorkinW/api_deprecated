import { UsersRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { CompaniesRepository } from "@modules/Companies/infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "@modules/Companies/repositories/ICompaniesRepository";
import { container } from "tsyringe";


container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
