import { CreateSpotController } from "@modules/Spots/useCases/createSpot/CreateSpotController";
import { ListSportsController } from "@modules/Spots/useCases/listSpots/ListSportsController";
import { WorkingHoursDayController } from "@modules/Spots/useCases/workingHoursDay/WorkingHoursDayController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const spotsRoutes = Router();

const createSpotController = new CreateSpotController();
const listSpotsController = new ListSportsController();
const workingHoursDayController = new WorkingHoursDayController();

spotsRoutes.post("/", ensureAuthenticated, createSpotController.handle);

spotsRoutes.get("/list", ensureAuthenticated, listSpotsController.handle);

spotsRoutes.get(
  "/times-spots",
  ensureAuthenticated,
  workingHoursDayController.handle
);

export { spotsRoutes };
