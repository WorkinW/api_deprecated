import { response, Router } from "express";

import { CompaniesRepository } from "../repositories/CompaniesRepository";

const companiesRoutes = Router();
const companiesRepository = new CompaniesRepository();

companiesRoutes.post("/", (request, response) => {
  const { fantasy_name, social_name, cnpj, type_company } = request.body;

  const companyAlreadyExists = companiesRepository.findByName(cnpj);

  if (companyAlreadyExists) {
    return response.status(400).json({ error: "Company already exists!" });
  }

  companiesRepository.create({ fantasy_name, social_name, cnpj, type_company });
  return response.status(201).send();
});

companiesRoutes.get("/", (request, response) => {
  const all = companiesRepository.list();

  return response.json(all);
});

export { companiesRoutes };
