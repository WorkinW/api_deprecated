import { CompaniesRepository } from "../../repositories/implementations/CompaniesRepository";
import { CreateCompanyController } from "./CreateCompanyController";
import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

export default (): CreateCompanyController => {
  const companiesRepository = new CompaniesRepository();

  const createCompanyUseCase = new CreateCompanyUseCase(companiesRepository);

  const createCompanyController = new CreateCompanyController(
    createCompanyUseCase
  );

  return createCompanyController;
};
