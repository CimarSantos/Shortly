import { Router } from "express";
import { shotyUrl } from "../controllers/urlsController.js";
/* import { tokenValidation } from "../middlewares/validation.token.js"; */
import { validadeUrl, validadeIdUrl } from "../middlewares/url.middleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", /* tokenValidation, */ validadeUrl, shotyUrl);

export default urlsRouter;
