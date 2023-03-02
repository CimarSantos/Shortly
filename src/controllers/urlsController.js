import { db } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import * as urlsRepository from "../repositories/urlRepository.js";
import { nanoid } from "nanoid";

async function shotyUrl(req, res) {
  const { userId } = res.locals;
  const { url } = req.body;
  const shortUrl = nanoid(8);

  try {
    await urlsRepository.insertUrlIntoUrls(userId, url, shortUrl);
    return res.status(STATUS_CODE.CREATED).send({ shortUrl });
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export { shotyUrl };
