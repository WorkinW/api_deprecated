import { AuthenticateUserController } from "@modules/Accounts/useCases/authenticateUser/AthenticateUserController";
import { RefreshTokenAuthenticateUserController } from "@modules/Accounts/useCases/RefreshTokenAuthenticateUser/RefreshTokenAuthenticateUserController";
import { Router } from "express";

const authenticateRoutes = Router();

const authenticateUserController = new AuthenticateUserController();
const refreshTokenAuthenticateUserController =
  new RefreshTokenAuthenticateUserController();

authenticateRoutes.post("/sessions", authenticateUserController.handle);
authenticateRoutes.post(
  "/refresh",
  refreshTokenAuthenticateUserController.handle
);

export { authenticateRoutes };
