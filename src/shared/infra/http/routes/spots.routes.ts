import { CreateSpotController } from "@modules/Spots/useCases/createSpot/CreateSpotController";
import { ListSportsController } from "@modules/Spots/useCases/listSpots/ListSportsController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const spotsRoutes = Router();

const createSpotController = new CreateSpotController();
const listSpotsController = new ListSportsController();

spotsRoutes.post("/", ensureAuthenticated, createSpotController.handle);

spotsRoutes.get("/list", ensureAuthenticated, listSpotsController.handle);

export { spotsRoutes };
