import { Router } from "express";
import { getDataUsers, getRanking } from "../controllers/usersController.js";
import { usersMeValidationToken } from "../middlewares/middleware.token.js";

const userRouter = Router();

userRouter.get("/users/me", usersMeValidationToken, getDataUsers);
userRouter.get("/ranking", getRanking);

export default userRouter;
