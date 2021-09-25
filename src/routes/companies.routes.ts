import { Router } from "express";

import { CompaniesRepository } from "../repositories/CompaniesRepository";
import { CreateCompanyService } from "../services/CreateCompanyService";

const companiesRoutes = Router();
const companiesRepository = new CompaniesRepository();

companiesRoutes.post("/", (request, response) => {
  const { fantasy_name, social_name, cnpj, type_company } = request.body;

  const createCompanyService = new CreateCompanyService(companiesRepository);

  createCompanyService.execute({
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  });

  return response.status(201).send();
});

companiesRoutes.get("/", (request, response) => {
  const all = companiesRepository.list();

  return response.json(all);
});

export { companiesRoutes };
