import { CreateCompanyController } from "@modules/Companies/useCases/createCompany/CreateCompanyController";
import { ListCompaniesController } from "@modules/Companies/useCases/ListCompanies/ListCompaniesController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const companiesRoutes = Router();

const createCompanyController = new CreateCompanyController();
const listCompaniesController = new ListCompaniesController();

companiesRoutes.use(ensureAuthenticated);

companiesRoutes.get("/", listCompaniesController.handle);

companiesRoutes.post("/", createCompanyController.handle);

export { companiesRoutes };
