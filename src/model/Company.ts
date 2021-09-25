import { v4 as uuidv4 } from "uuid";

class Company {
  id?: string;
  fantasy_name: string;
  social_name: string;
  cnpj: string;
  type_company: string;
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Company };
