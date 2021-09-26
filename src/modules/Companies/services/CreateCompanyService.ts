import { ICompaniesRepository } from "../repositories/ICompaniesRepository";

interface IRequest {
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
}

class CreateCompanyService {
  constructor(private companiesRepository: ICompaniesRepository) {}

  execute({ fantasy_name, social_name, cnpj, type_company }: IRequest): void {
    const companyAlreadyExists = this.companiesRepository.findByName(cnpj);

    if (companyAlreadyExists) {
      throw new Error("Company already exists!");
    }

    this.companiesRepository.create({
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });
  }
}

export { CreateCompanyService };
