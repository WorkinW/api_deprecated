import { Column, CreateDateColumn, Entity, PrimaryColumn } from "typeorm";
import { v4 as uuidv4 } from "uuid";

@Entity("companies")
class Company {
  @PrimaryColumn()
  id?: string;

  @Column()
  fantasy_name: string;

  @Column()
  social_name: string;

  @Column()
  cnpj: string;

  @Column()
  type_company: string;

  @CreateDateColumn()
  created_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Company };
