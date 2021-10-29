import { NumericLiteral } from "typescript";

enum Position {
  Entry = "entry",
  Exit = "exit",
}

interface ICreateSpotDTO {
  user_id: string;
  company_id: string;
  time_position: Position;
  time_course?: number;
  created_at?: Date;
  updated_at?: Date;
}

export { ICreateSpotDTO };
