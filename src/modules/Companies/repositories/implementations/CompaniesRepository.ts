import { Company } from "../../model/Company";
import { ICreateCompanyDTO } from "../ICompaniesRepository";

class CompaniesRepository {
  private companies: Company[];

  private static INSTANCE: CompaniesRepository;

  private constructor() {
    this.companies = [];
  }

  public static getInstance(): CompaniesRepository {
    if (!CompaniesRepository.INSTANCE) {
      CompaniesRepository.INSTANCE = new CompaniesRepository();
    }
    return CompaniesRepository.INSTANCE;
  }

  create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): void {
    const company = new Company();

    Object.assign(company, {
      fantasy_name,
      social_name,
      cnpj,
      type_company,
      created_at: new Date(),
    });

    this.companies.push(company);
  }

  list(): Company[] {
    return this.companies;
  }

  findByName(cnpj: string): Company {
    const company = this.companies.find((company) => company.cnpj === cnpj);

    return company;
  }
}

export { CompaniesRepository };
