import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";
import { ListCompaniesController } from "./ListCompaniesController";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";

const companiesRepository = CompaniesRepository.getInstance();
const listCompaniesUseCase = new ListCompaniesUseCase(companiesRepository);
const listCompaniesController = new ListCompaniesController(
  listCompaniesUseCase
);

export { listCompaniesController };
