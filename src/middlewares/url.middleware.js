import { db } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import * as urlsRepository from "../repositories/urlRepository.js";

async function validadeUrl(req, res, next) {
  const { url } = req.body;
  const validUrl =
    url.substring(0, 7) === "http://" || url.substring(0, 8) === "https://";

  if (!validUrl) {
    return res
      .status(STATUS_CODE.UNPROCESSABLE_ENTITY)
      .send({ message: `"url" must be a valid URL` });
  }

  next();
}

async function validadeIdUrl(req, res, next) {
  const { userId, id } = res.locals;

  try {
    const { rows: url } = await urlsRepository.selectUrlById(id);
    if (url.length === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    const { rows: urlOwner } = await urlsRepository.selectUrlByIdandUserId(
      id,
      userId
    );
    if (urlOwner.length === 0) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }

  next();
}

async function postUrlValidade(req, res) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");
  const { url } = req.body;

  try {
    if (!authorization) return res.sendStatus(401);

    if (!token || token === "" || typeof token !== "string")
      return res.sendStatus(401);
    if (!url || url === "" || typeof url !== "string")
      return res.sendStatus(422);

    const urlFormat = /^(https?|ftp):\/\/[^\s\/$.?#].[^\s]*$/i;
    if (!urlFormat.test(url)) return res.sendStatus(422);

    const tokenExist = await db.query(
      "SELECT * FROM sessions WHERE token = $1;",
      [token]
    );
    if (!tokenExist.rows[0]) return res.sendStatus(401);

    const urlShortExist = await db.query("SELECT * FROM urls WHERE url = $1;", [
      url,
    ]);
    if (urlShortExist.rows[0]) return res.sendStatus(409);

    res.locals.id_user = tokenExist.rows[0].id_user;

    next();
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export { validadeUrl, validadeIdUrl, postUrlValidade };
