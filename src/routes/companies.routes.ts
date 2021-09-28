import { Router } from "express";

import createCompanyController from "../modules/Companies/useCases/createCompany";
import { listCompaniesController } from "../modules/Companies/useCases/ListCompanies";

const companiesRoutes = Router();

companiesRoutes.post("/", (request, response) => {
  return createCompanyController().handle(request, response);
});

companiesRoutes.get("/", (request, response) => {
  return listCompaniesController.handle(request, response);
});

export { companiesRoutes };
