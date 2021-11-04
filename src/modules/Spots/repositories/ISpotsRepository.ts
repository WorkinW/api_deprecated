import { ICreateSpotDTO } from "../dtos/ICreateSpotDTO";
import { IListSpotDTO } from "../dtos/IListSpotDTO";
import { Spot } from "../infra/typeorm/entities/Spot";


interface ISpotsRepository {
  findByTimePosition(user_id: string): Promise<Spot>;
  findByLastSpot(user_id: string): Promise<Spot>;
  findAllByUserId(data: IListSpotDTO): Promise<Spot[]>;
  findAllSpots(data: IListSpotDTO): Promise<Spot[]>;
  create(data: ICreateSpotDTO): Promise<Spot>;
}

export { ISpotsRepository };
