import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICompaniesRepository } from "../../repositories/ICompaniesRepository";

interface IRequest {
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
}

@injectable()
class CreateCompanyUseCase {
  constructor(
    @inject("CompaniesRepository")
    private companiesRepository: ICompaniesRepository
  ) { }

  async execute({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: IRequest): Promise<void> {
    const companyAlreadyExists = await this.companiesRepository.findByCnpj(
      cnpj
    );

    if (companyAlreadyExists) {
      throw new AppError("Company already exists!");
    }

    this.companiesRepository.create({
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });
  }
}

export { CreateCompanyUseCase };
