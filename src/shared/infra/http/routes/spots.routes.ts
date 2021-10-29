import { CreateSpotController } from "@modules/Spots/useCases/createSpot/CreateSpotController";
import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const spotsRoutes = Router();

const createSpotController = new CreateSpotController();

spotsRoutes.post("/", ensureAuthenticated, createSpotController.handle);

export { spotsRoutes };
