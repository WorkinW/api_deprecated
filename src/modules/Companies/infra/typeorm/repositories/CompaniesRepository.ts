import {
  ICompaniesRepository,
  ICreateCompanyDTO,
} from "@modules/Companies/repositories/ICompaniesRepository";
import { getRepository, Repository } from "typeorm";

import { Company } from "../entities/Company";

class CompaniesRepository implements ICompaniesRepository {
  private repository: Repository<Company>;

  constructor() {
    this.repository = getRepository(Company);
  }

  async create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): Promise<void> {
    const company = this.repository.create({
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });

    await this.repository.save(company);
  }

  async list(): Promise<Company[]> {
    const companies = await this.repository.find();
    return companies;
  }

  async findByCnpj(cnpj: string): Promise<Company> {
    const company = await this.repository.findOne({ cnpj });
    return company;
  }
}

export { CompaniesRepository };
