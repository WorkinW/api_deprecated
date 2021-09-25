import { Company } from "../model/Company";

interface ICreateCompanyDTO {
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
}

class CompaniesRepository {
  private companies: Company[];

  constructor() {
    this.companies = [];
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

    console.log(this.companies);
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
