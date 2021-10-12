import { inject } from "tsyringe";

@injectable()
class CreateSpotUseCase {
  constructor(
    @inject("SpotRepository") private spotRepository: ISpotRepository
  ) { }

  async execute(spot: Spot): Promise<Spot> {
    return this.spotRepository.create(spot);
  }
}

export { CreateSpotUseCase };
