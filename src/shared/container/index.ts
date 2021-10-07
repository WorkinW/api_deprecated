import { container } from "tsyringe";

import { UsersRepository } from "../../modules/Accounts/entities/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/Accounts/repositories/IUsersRepository";
import { ICompaniesRepository } from "../../modules/Companies/repositories/ICompaniesRepository";
import { CompaniesRepository } from "../../modules/Companies/repositories/implementations/CompaniesRepository";

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);
