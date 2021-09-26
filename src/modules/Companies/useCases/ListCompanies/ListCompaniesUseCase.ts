import { Company } from "../../model/Company";
import { ICompaniesRepository } from "../../repositories/ICompaniesRepository";

class ListCompaniesUseCase {
  constructor(private companiesRepository: ICompaniesRepository) { }

  execute(): Company[] {
    const companies = this.companiesRepository.list();

    return companies;
  }
}

export { ListCompaniesUseCase };
