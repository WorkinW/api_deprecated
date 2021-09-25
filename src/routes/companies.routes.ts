import { Router } from "express";

import { CompaniesRepository } from "../repositories/CompaniesRepository";

const companiesRoutes = Router();
const companiesRepository = new CompaniesRepository();

companiesRoutes.post("/", (request, response) => {
  const { fantasy_name, social_name, cnpj, type_company } = request.body;

  companiesRepository.create({ fantasy_name, social_name, cnpj, type_company });
  return response.status(201).send();
});

export { companiesRoutes };
