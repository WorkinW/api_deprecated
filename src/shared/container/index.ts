import { UsersRepository } from "@modules/Accounts/infra/typeorm/repositories/UsersRepository";
import { IUsersRepository } from "@modules/Accounts/repositories/IUsersRepository";
import { CompaniesRepository } from "@modules/Companies/infra/typeorm/repositories/CompaniesRepository";
import { ICompaniesRepository } from "@modules/Companies/repositories/ICompaniesRepository";
import { SpotsRepository } from "@modules/Spots/infra/typeorm/repositories/SpotsRepository";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { container } from "tsyringe";

import "@shared/container/providers";

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);

container.registerSingleton<IUsersRepository>(
  "UsersRepository",
  UsersRepository
);

container.registerSingleton<ISpotsRepository>(
  "SpotsRepository",
  SpotsRepository
);
