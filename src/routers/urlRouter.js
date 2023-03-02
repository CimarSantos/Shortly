import { Router } from "express";
import {
  shotyUrl,
  getUrlShorts,
  getUrlbyShort,
} from "../controllers/urlsController.js";
/* import { tokenValidation } from "../middlewares/validation.token.js"; */
import { validadeUrl, validadeIdUrl } from "../middlewares/url.middleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", /* tokenValidation, */ validadeUrl, shotyUrl);
urlsRouter.get("/urls/:id", /* validadeUrl, */ getUrlShorts);
urlsRouter.get("/urls/open/:shortUrl", /* validadeUrl, */ getUrlbyShort);


export default urlsRouter;
