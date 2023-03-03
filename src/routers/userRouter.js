import { Router } from "express";
import { getDataUsers, getRanking } from "../controllers/usersController.js";
import { urlTokenValidation } from "../middlewares/middleware.token.js";

const userRouter = Router();

userRouter.get("/users/me", urlTokenValidation, getDataUsers);
userRouter.get("/ranking", getRanking);

export default userRouter;
