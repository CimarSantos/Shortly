import { Router } from "express";
import { urlTokenValidation } from "../middlewares/middleware.token.js";
import {
  shotyUrl,
  getUrlShorts,
  getUrlbyShort,
  deleteUrlById,
} from "../controllers/urlsController.js";
import { schemasValidation } from "../middlewares/schemasValidation.js";
import { validadeUrl, postUrlValidade } from "../middlewares/url.middleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", urlTokenValidation, validadeUrl, shotyUrl);
urlsRouter.get("/urls/:id", schemasValidation, getUrlShorts);
urlsRouter.get("/urls/open/:shortUrl", /* validadeUrl, */ getUrlbyShort);
urlsRouter.delete("/urls/:id", /* validadeUrl, */ deleteUrlById);

export default urlsRouter;
