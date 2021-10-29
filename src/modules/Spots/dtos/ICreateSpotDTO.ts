enum Position {
  Entry = "entry",
  Exit = "exit",
}

interface ICreateSpotDTO {
  user_id: string;
  company_id: string;
  time_position: Position;
}

export { ICreateSpotDTO };
