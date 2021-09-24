import { Router } from "express";

import { v4 as uuidv4 } from "uuid";

const companiesRoutes = Router();

const companies = [];

companiesRoutes.post("/", (request, response) => {
  const { fantasy_name, social_name, cnpj, type_company } = request.body;

  const company = {
    id: uuidv4(),
    fantasy_name,
    social_name,
    cnpj,
    type_company,
  };

  companies.push(company);

  console.log(companies);

  return response.status(201).send();
});

export { companiesRoutes };
