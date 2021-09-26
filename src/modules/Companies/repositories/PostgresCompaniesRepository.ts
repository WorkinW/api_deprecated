import { Company } from "../model/Company";
import {
  ICompaniesRepository,
  ICreateCompanyDTO,
} from "./ICompaniesRepository";

class PostgresCompaniesRepository implements ICompaniesRepository {
  findByName(cnpj: string): Company {
    throw new Error("Method not implemented.");
  }
  list(): Company[] {
    throw new Error("Method not implemented.");
  }
  create({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  }: ICreateCompanyDTO): void {
    throw new Error("Method not implemented.");
  }

}

export { PostgresCompaniesRepository };
