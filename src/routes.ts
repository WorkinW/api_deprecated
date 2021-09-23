
import { Request, Response } from 'express';
import CreateEmployeeService from './CreateEmployeeService';

export function createEmployee(request: Request, response: Response) {
    CreateEmployeeService.execute({
        name: "Lucas",
        company: "Multiplier"
    });

    return response.send();
}
