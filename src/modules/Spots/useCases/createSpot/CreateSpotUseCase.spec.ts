import { SpotsRepositoryInMemory } from "@modules/Spots/repositories/SpotsRepositoryInMemory";

import { CreateSpotUseCase } from "./CreateSpotUseCase";

enum Position {
  Entry = "entry",
  Exit = "exit",
}

let createSpotUseCase: CreateSpotUseCase;
let spotsRepositoryInMemory: SpotsRepositoryInMemory;

describe("Create Spot", () => {
  beforeEach(() => {
    spotsRepositoryInMemory = new SpotsRepositoryInMemory();
    createSpotUseCase = new CreateSpotUseCase(spotsRepositoryInMemory);
  });

  it("should be able to create a new spot where time position is entry", async () => {
    const spot = await createSpotUseCase.execute({
      user_id: "2b9fe14b-e706-4f44-bf36-d24e680c0e0e",
      company_id: "dcd9fd26-257d-4543-b3e0-f8e1f9f34afa",
      time_position: Position.Entry,
    });

    console.log(spot);

    expect(spot).toHaveProperty("id");
    expect(spot).toHaveProperty("user_id");
    expect(spot).toHaveProperty("company_id");
    expect(spot).toHaveProperty("time_position");
    expect(spot.time_position).toBe("entry");
    expect(spot).toBeDefined();
  });

  it("should be able to create a new spot where time position is exit", async () => {
    const spot = await createSpotUseCase.execute({
      user_id: "2b9fe14b-e706-4f44-bf36-d24e680c0e0e",
      company_id: "dcd9fd26-257d-4543-b3e0-f8e1f9f34afa",
      time_position: Position.Exit,
    });

    console.log(spot);

    expect(spot).toHaveProperty("id");
    expect(spot).toHaveProperty("user_id");
    expect(spot).toHaveProperty("company_id");
    expect(spot).toHaveProperty("time_position");
    expect(spot.time_position).toBe("exit");
    expect(spot).toBeDefined();
  });
});
