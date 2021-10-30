import { ICreateSpotDTO } from "../dtos/ICreateSpotDTO";
import { Spot } from "../infra/typeorm/entities/Spot";
import { ISpotsRepository } from "./ISpotsRepository";

class SpotsRepositoryInMemory implements ISpotsRepository {
  spots: Spot[] = [];
  async findByTimePosition(user_id: string): Promise<Spot> {
    return this.spots.find((spot) => spot.user_id === user_id);
  }

  async findByLastSpot(user_id: string): Promise<Spot> {
    return this.spots.find((spot) => spot.user_id === user_id);
  }

  async create({
    user_id,
    company_id,
    time_position,
  }: ICreateSpotDTO): Promise<Spot> {
    const spot = new Spot();
    Object.assign(spot, {
      user_id,
      company_id,
      time_position,
    });
    this.spots.push(spot);

    return spot;
  }
}

export { SpotsRepositoryInMemory };
