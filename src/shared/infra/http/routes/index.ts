import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { companiesRoutes } from "./companies.routes";
import { spotsRoutes } from "./spots.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/companies", companiesRoutes);
router.use("/users", usersRouters);
router.use("/spots", spotsRoutes);
router.use(authenticateRoutes);

export { router };
