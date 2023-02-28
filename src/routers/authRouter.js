import { Router } from "express";
import { signUp, signIn } from "../controllers/authController.js";

import { validateUser } from "../middlewares/auth.middleware.js";
import { schemasValidation } from "../middlewares/schemasValidation.js";
const userRouter = Router();

userRouter.post("/signup", schemasValidation, validateUser, signUp);
userRouter.post("/signin", schemasValidation, validateUser, signIn);

export default userRouter;
