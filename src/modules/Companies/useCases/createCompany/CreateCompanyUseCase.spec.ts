import { AppError } from "@errors/AppError";
import { CompaniesRepositoryInMemory } from "@modules/Companies/repositories/in-memory/CompaniesRepositoryInMemory";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

let createCompanyUseCase: CreateCompanyUseCase;
let companiesRepositoryInMemory: CompaniesRepositoryInMemory;

describe("Create company", () => {
  beforeEach(() => {
    companiesRepositoryInMemory = new CompaniesRepositoryInMemory();
    createCompanyUseCase = new CreateCompanyUseCase(
      companiesRepositoryInMemory
    );
  });
  it("Awaits the creation of a new company", async () => {
    const company = {
      fantasy_name: "Lucas LST",
      social_name: "Lucasildo",
      cnpj: "4515487985456",
      type_company: "Doida",
    };

    await createCompanyUseCase.execute({
      fantasy_name: company.fantasy_name,
      social_name: company.social_name,
      cnpj: company.cnpj,
      type_company: company.type_company,
    });

    const companyCreated = await companiesRepositoryInMemory.findByCnpj(
      company.cnpj
    );
    console.log(companyCreated);
    expect(companyCreated).toHaveProperty("id");
  });

  it("Cannot create company with same cnpj", async () => {
    expect(async () => {
      const company = {
        fantasy_name: "Lucas LST",
        social_name: "Lucasildo",
        cnpj: "4515487985456",
        type_company: "Doida",
      };

      await createCompanyUseCase.execute({
        fantasy_name: company.fantasy_name,
        social_name: company.social_name,
        cnpj: company.cnpj,
        type_company: company.type_company,
      });

      await createCompanyUseCase.execute({
        fantasy_name: company.fantasy_name,
        social_name: company.social_name,
        cnpj: company.cnpj,
        type_company: company.type_company,
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
