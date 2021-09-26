import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

const companiesRepository = CompaniesRepository.getInstance();

const createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);

const createCompanyController = new CreateCompanyController(
  createCompanyUseCase
);

export { createCompanyController, createCompanyUseCase };
