import { CompaniesRepository } from "../../repositories/CompaniesRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

const companiesRepository = new CompaniesRepository();

const createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);

const createCompanyController = new CreateCompanyController(
  createCompanyUseCase
);

export { createCompanyController, createCompanyUseCase };
