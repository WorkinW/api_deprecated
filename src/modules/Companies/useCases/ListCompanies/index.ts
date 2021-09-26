import { CompaniesRepository } from "../../repositories/CompaniesRepository";
import { ListCompaniesController } from "./ListCompaniesController";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

const companiesRepository = new CompaniesRepository();
const listCompaniesUseCase = new ListCompaniesUseCase(companiesRepository);
const listCompaniesController = new ListCompaniesController(
  listCompaniesUseCase
);

export { listCompaniesController };
