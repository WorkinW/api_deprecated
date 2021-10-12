import { User } from "@modules/Accounts/infra/typeorm/entities/User";
import { Company } from "@modules/Companies/infra/typeorm/entities/Company";
import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryColumn,
} from "typeorm";
import { v4 as uuidv4 } from "uuid";

enum Position {
  Entry = "entry",
  Exit = "exit",
}

@Entity("spots")
class Spot {
  @PrimaryColumn("uuid")
  id?: string;

  @ManyToOne(() => Company)
  @JoinColumn({ name: "company_id" })
  company: Company;

  @Column()
  company_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: "user_id" })
  user: User;

  @Column()
  user_id: string;

  @Column()
  time_course: number;

  @Column()
  time_position: Position;

  @CreateDateColumn()
  created_at: Date;

  @CreateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuidv4();
    }
  }
}

export { Spot };
