import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { companiesRoutes } from "./companies.routes";
import { usersRouters } from "./users.routes";

const router = Router();

router.use("/companies", companiesRoutes);
router.use("/users", usersRouters);
router.use(authenticateRoutes);

export { router };
