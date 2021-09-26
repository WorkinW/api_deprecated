import { Request, Response } from "express";
import { ListCompaniesUseCase } from "./ListCompaniesUseCase";


class ListCompaniesController {
  constructor(private listCompaniesUseCase: ListCompaniesUseCase) { }

  handle(request: Request, response: Response): Response {
    const all = this.listCompaniesUseCase.execute();

    return response.json(all);
  }
}

export { ListCompaniesController };
