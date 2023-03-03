import { Router } from "express";
import {
  shotyUrl,
  getUrlShorts,
  getUrlbyShort,
  deleteUrlById,
} from "../controllers/urlsController.js";
import { schemasValidation } from "../middlewares/schemasValidation.js";
import {
  validadeUrl,
  validadeIdUrl,
  postUrlValidade,
} from "../middlewares/url.middleware.js";

const urlsRouter = Router();

urlsRouter.post("/urls/shorten", /* tokenValidation, */ validadeUrl, shotyUrl);
urlsRouter.get("/urls/:id", schemasValidation, getUrlShorts);
urlsRouter.get("/urls/open/:shortUrl", /* validadeUrl, */ getUrlbyShort);
urlsRouter.delete("/urls/:id", /* validadeUrl, */ deleteUrlById);

export default urlsRouter;
