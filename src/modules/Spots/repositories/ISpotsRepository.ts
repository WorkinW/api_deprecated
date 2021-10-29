import { ICreateSpotDTO } from "../dtos/ICreateSpotDTO";
import { Spot } from "../infra/typeorm/entities/Spot";


interface ISpotsRepository {
  findByTimePosition(user_id: string): Promise<Spot>;
  create(data: ICreateSpotDTO): Promise<Spot>;
}

export { ISpotsRepository };
