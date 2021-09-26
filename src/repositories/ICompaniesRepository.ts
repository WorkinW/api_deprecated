import { Company } from "../model/Company";

interface ICreateCompanyDTO {
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
}


interface ICompaniesRepository {
  findByName(cnpj: string): Company;
  list(): Company[];
  create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): void;
}

export { ICompaniesRepository, ICreateCompanyDTO };
