import { Company } from "../infra/typeorm/entities/Company";

interface ICreateCompanyDTO {
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
}

interface ICompaniesRepository {
  findByCnpj(cnpj: string): Promise<Company>;
  list(): Promise<Company[]>;
  create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): Promise<void>;
}

export { ICompaniesRepository, ICreateCompanyDTO };
