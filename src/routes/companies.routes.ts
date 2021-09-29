import { Router } from "express";

import { CreateCompanyController } from "../modules/Companies/useCases/createCompany/CreateCompanyController";
import { ListCompaniesController } from "../modules/Companies/useCases/ListCompanies/ListCompaniesController";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

companiesRoutes.get("/", listCompaniesController.handle);

companiesRoutes.post("/", createCompanyController.handle);

export { companiesRoutes };
