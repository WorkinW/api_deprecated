import { Company } from "../../infra/typeorm/entities/Company";
import {
  ICompaniesRepository,
  ICreateCompanyDTO,
} from "../ICompaniesRepository";

class CompaniesRepositoryInMemory implements ICompaniesRepository {
  companies: Company[] = [];

  async findByCnpj(cnpj: string): Promise<Company> {
    const company = await this.companies.find(
      (company) => company.cnpj === cnpj
    );
    return company;
  }

  async create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): Promise<void> {
    const company = new Company();

    Object.assign(company, {
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });

    this.companies.push(company);
  }

  async list(): Promise<Company[]> {
    const companies = await this.companies;
    return companies;
  }
}

export { CompaniesRepositoryInMemory };
