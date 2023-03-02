import { db } from "../database/database.js";
import { TABLE } from "../enums/tables.js";

async function selectUrlById(id) {
  return db.query(`SELECT * FROM ${TABLE.URLS} WHERE id = $1;`, [id]);
}

async function selectUrlByIdandUserId(id, userId) {
  return db.query(
    `SELECT * FROM ${TABLE.URLS} WHERE id = $1 AND userid = $2;`,
    [id, userId]
  );
}

async function insertUrlIntoUrls(userId, url, shortUrl) {
  return db.query(
    `INSERT INTO ${TABLE.URLS} (userid, url, shorturl) VALUES ($1, $2, $3);`,
    [userId, url, shortUrl]
  );
}

async function selectUrlByShortUrl(shortUrl) {
  return db.query(`SELECT url FROM ${TABLE.URLS} WHERE shorturl = $1;`, [
    shortUrl,
  ]);
}

async function updateVisitCount(shortUrl) {
  return db.query(
    `UPDATE ${TABLE.URLS} SET visitcount = (visitcount + 1) WHERE shorturl = $1;`,
    [shortUrl]
  );
}

async function deleteUrlFromUrls(id) {
  return db.query(`DELETE FROM ${TABLE.URLS} WHERE id = $1;`, [id]);
}

export {
  selectUrlById,
  selectUrlByIdandUserId,
  insertUrlIntoUrls,
  selectUrlByShortUrl,
  updateVisitCount,
  deleteUrlFromUrls,
};
