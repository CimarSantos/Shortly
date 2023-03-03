import { db } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";

async function getDataUsers(req, res) {
  const { userId } = res.locals;

  try {
    const [usersUrls, visits, userinfo] = await Promise.all([
      db.query(
        'SELECT id, "shortUrl", url, visitcount FROM urls WHERE userid = $1;',
        [userId]
      ),
      db.query("SELECT SUM(visitcount) FROM urls WHERE userid = $1;", [userId]),
      db.query("SELECT id, name FROM users WHERE id = $1;", [userId]),
    ]);

    const myUrls = {
      id: userinfo.rows[0]?.id,
      name: userinfo.rows[0]?.name,
      visitCount: Number(visits.rows[0]?.sum),
      shortenedUrls: usersUrls.rows,
    };

    return res.send(myUrls);
  } catch (error) {
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

async function getRanking(req, res) {
  try {
    const ranking = await db.query(
      'SELECT users.id, users.name, count(urls.userid) AS "linksCount", sum(urls.visitcount) AS visitcount FROM users LEFT JOIN urls ON urls.userid = users.id GROUP BY users.id ORDER BY visitcount desc LIMIT 10;'
    );

    return res.send(ranking.rows);
  } catch (error) {
    console.log(error);
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { getDataUsers, getRanking };
