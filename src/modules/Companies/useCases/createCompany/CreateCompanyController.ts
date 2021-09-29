import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateCompanyUseCase } from "./CreateCompanyUseCase";

class CreateCompanyController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { fantasy_name, social_name, cnpj, type_company } = request.body;

    const createCompanyUseCase = container.resolve(CreateCompanyUseCase);

    await createCompanyUseCase.execute({
      fantasy_name,
      social_name,
      cnpj,
      type_company,
    });

    return response.status(201).send();
  }
}

export { CreateCompanyController };
