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
    const cutUrl = await db.query("SELECT * FROM urls WHERE url = $1;", [url]);

    return res.status(STATUS_CODE.CREATED).send({
      id: cutUrl.rows[0].id,
      shortUrl: cutUrl.rows[0].shortUrl,
    });
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

async function getUrlShorts(req, res) {
  const { id } = req.params;
  try {
    const { rows: url } = await urlsRepository.selectUrlById(id);
    if (url.length === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }

    return res.status(STATUS_CODE.OK).send(url[0]);
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

async function getUrlbyShort(req, res) {
  const { shortUrl } = req.params;

  try {
    const { rows: url } = await urlsRepository.selectUrlByShortUrl(shortUrl);
    if (url.length === 0) {
      return res.sendStatus(STATUS_CODE.NOT_FOUND);
    }
      await urlsRepository.updateVisitCount(shortUrl);
    return res.redirect(url[0].url);
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

async function deleteUrlById(req, res) {
  const { id } = req.params;

  const { authorization } = req.headers;

  if (!authorization) return res.sendStatus(STATUS_CODE.UNAUTHORIZED);

  const token = authorization?.replace("Bearer ", "");

  if (!token) return res.sendStatus(STATUS_CODE.UNAUTHORIZED);

  try {
    const { rows } = await db.query("SELECT * FROM sessions WHERE token = $1", [
      token,
    ]);

    const [user] = rows;

    if (!user) return res.sendStatus(STATUS_CODE.UNAUTHORIZED);

    const { rows: shortens } = await db.query(
      "SELECT * FROM urls WHERE id = $1",
      [id]
    );

    const [url] = shortens;

    if (!url) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    if (user.userId != url.userId)
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);

    await db.query("DELETE FROM urls WHERE id= $1", [id]);

    res.sendStatus(STATUS_CODE.NO_CONTENT);
  } catch (error) {
    res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}


export { shotyUrl, getUrlShorts, getUrlbyShort, deleteUrlById };
