import { ICreateSpotDTO } from "@modules/Spots/dtos/ICreateSpotDTO";
import { IListSpotDTO } from "@modules/Spots/dtos/IListSpotDTO";
import { ISpotsRepository } from "@modules/Spots/repositories/ISpotsRepository";
import { getRepository, Repository } from "typeorm";

import { Spot } from "../entities/Spot";

class SpotsRepository implements ISpotsRepository {
  private repository: Repository<Spot>;

  constructor() {
    this.repository = getRepository(Spot);
  }

  async findByTimePosition(user_id: string): Promise<Spot> {
    const spotOfUser = await this.repository.findOne({
      where: { user_id },
      order: { created_at: "DESC" },
    });

    return spotOfUser;
  }

  async findByLastSpot(user_id: string): Promise<Spot> {
    const spotOfUser = await this.repository.findOne({
      where: { user_id, time_position: "entry" },
      order: { created_at: "DESC" },
    });

    return spotOfUser;
  }

  async create({
    user_id,
    company_id,
    time_position,
    time_course,
  }: ICreateSpotDTO): Promise<Spot> {
    const spot = this.repository.create({
      user_id,
      company_id,
      time_position,
      time_course,
    });

    await this.repository.save(spot);

    return spot;
  }

  async findAllSpots({ company_id }: IListSpotDTO): Promise<Spot[]> {
    const spots = await this.repository.find({
      where: { company_id },
      order: { created_at: "DESC" },
    });

    return spots;
  }

  async findAllByUserId({ user_id }: IListSpotDTO): Promise<Spot[]> {
    const spots = await this.repository.find({
      where: { user_id },
      order: { created_at: "DESC" },
    });

    return spots;
  }
}

export { SpotsRepository };
