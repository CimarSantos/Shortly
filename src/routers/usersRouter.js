import { Router } from "express";
import { signUp } from "../controllers/signUp.js";

import { validateSignUp } from "../middlewares/user.middleware.js";
const userRouter = Router();

userRouter.post("/signup", validateSignUp, signUp);

export default userRouter;
