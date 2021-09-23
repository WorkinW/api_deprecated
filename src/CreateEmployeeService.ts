interface Employee {
    name: string;
    company: string;
}

class CreateEmployeeService {

    execute({ name, company }: Employee) {
        console.log(name, company)
    }
}

export default new CreateEmployeeService();
