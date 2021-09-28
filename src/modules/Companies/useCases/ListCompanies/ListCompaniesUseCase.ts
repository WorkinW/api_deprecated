import { Company } from "../../entities/Company";
import { ICompaniesRepository } from "../../repositories/ICompaniesRepository";

class ListCompaniesUseCase {
  constructor(private companiesRepository: ICompaniesRepository) { }

  execute(): Promise<Company[]> {
    const companies = this.companiesRepository.list();

    return companies;
  }
}

export { ListCompaniesUseCase };
