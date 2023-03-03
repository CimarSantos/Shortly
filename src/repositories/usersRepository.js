import { db } from "../database/database.js";
import { TABLE } from "../enums/tables.js";

async function selectUserData(userId) {
  return db.query(
    `SELECT ${TABLE.USERS}.id
            , ${TABLE.USERS}.name
            , COALESCE(SUM(${TABLE.URLS}.visitcount), 0) AS visitcount
            , json_agg(json_build_object(
                'id', ${TABLE.URLS}.id
                , 'shortUrl', ${TABLE.URLS}."shortUrl"  
                , 'url', ${TABLE.URLS}.url
                , 'visitcount', ${TABLE.URLS}.visitcount
            )) AS "shortenedUrls"
        FROM ${TABLE.USERS}
        LEFT JOIN ${TABLE.URLS} ON ${TABLE.USERS}.id = ${TABLE.URLS}.userid
        WHERE ${TABLE.USERS}.id = $1
        GROUP BY ${TABLE.USERS}.id;`,
    [userId]
  );
}

async function listRanking() {
  return db.query(
    `SELECT ${TABLE.USERS}.id
    , ${TABLE.USERS}.name
    , COUNT(${TABLE.URLS}.visitcount) AS "linksCount"
    , SUM(${TABLE.URLS}.visitcount) AS "visitCount"
FROM ${TABLE.USERS}
JOIN ${TABLE.URLS} ON ${TABLE.USERS}.id = ${TABLE.URLS}.userid
GROUP BY ${TABLE.USERS}.id, ${TABLE.USERS}.name
ORDER BY "visitCount" DESC
LIMIT 10;`
  );
}

export { selectUserData, listRanking };
