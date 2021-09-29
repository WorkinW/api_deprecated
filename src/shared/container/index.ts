import { container } from "tsyringe";

import { ICompaniesRepository } from "../../modules/Companies/repositories/ICompaniesRepository";
import { CompaniesRepository } from "../../modules/Companies/repositories/implementations/CompaniesRepository";

container.registerSingleton<ICompaniesRepository>(
  "CompaniesRepository",
  CompaniesRepository
);
