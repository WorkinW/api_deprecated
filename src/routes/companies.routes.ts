import { Router } from "express";
import multer from "multer";

import { createCompanyController } from "../modules/Companies/useCases/createCompany";
import { listCompaniesController } from "../modules/Companies/useCases/ListCompanies";

const companiesRoutes = Router();
const upload = multer({
  dest: "./tmp",
});

companiesRoutes.post("/", (request, response) => {
  return createCompanyController.handle(request, response);
});

companiesRoutes.post("/import", upload.single("file"), (request, response) => {
  const { file } = request;
  console.log(file);
  
  return response.send();
});

companiesRoutes.get("/", (request, response) => {
  return listCompaniesController.handle(request, response);
});

export { companiesRoutes };
