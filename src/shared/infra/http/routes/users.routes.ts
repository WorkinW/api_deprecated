import { CreateUserController } from "@modules/Accounts/useCases/createUser/CreateUserController";
import { ListNonAdminUsersController } from "@modules/Accounts/useCases/ListNonAdminUsers/ListNonAdminUsersController";
import { UpdateUserAvatarController } from "@modules/Accounts/useCases/updateUserAvatar/UpdateUserAvatarController";
import { UserLoggedController } from "@modules/Accounts/useCases/UserLogged/UserLoggedController";
import { Router } from "express";
import multer from "multer";

import uploadConfig from "../../../../config/upload";
import { ensureAdmin } from "../middlewares/ensureAdmin";
import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";

const usersRouters = Router();

const uploadAvatar = multer(uploadConfig.upload("./tmp/avatar"));

const createUserController = new CreateUserController();
const updateUserAvatarController = new UpdateUserAvatarController();
const listNonAdminUsersController = new ListNonAdminUsersController();
const userLoggedController = new UserLoggedController();

usersRouters.post("/", createUserController.handle);

usersRouters.patch(
  "/avatar",
  ensureAuthenticated,
  uploadAvatar.single("avatar"),
  updateUserAvatarController.handle
);

usersRouters.get(
  "/officials",
  ensureAuthenticated,
  ensureAdmin,
  listNonAdminUsersController.handle
);

usersRouters.get("/me", ensureAuthenticated, userLoggedController.handle);

export { usersRouters };
