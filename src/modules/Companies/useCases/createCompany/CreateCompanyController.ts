import { Request, Response } from "express";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";


class CreateCompanyController {
  constructor(private createCompanyUseCase: CreateCompanyUseCase) {}

  handle(request: Request, response: Response): Response {
    const { fantasy_name, social_name, cnpj, type_company } = request.body;

    this.createCompanyUseCase.execute({
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });

    return response.status(201).send();
  }
}

export { CreateCompanyController };
