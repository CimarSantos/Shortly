import { db } from "../database/database.js";
import { TABLE } from "../enums/tables.js";

async function selectUserToken(userId, token) {
  return db.query(
    `SELECT * FROM ${TABLE.SESSIONS} WHERE userid = $1 AND token = $2;`,
    [userId, token]
  );
}

async function deleteUserFromSessions(token) {
  return db.query(`DELETE FROM ${TABLE.SESSIONS} WHERE token = $1;`, [token]);
}

async function selectUserByEmail(email) {
  return db.query(`SELECT * FROM ${TABLE.USERS} WHERE email = $1;`, [email]);
}

async function insertUserIntoUsers(name, email, password) {
  return db.query(
    `INSERT INTO ${TABLE.USERS} (name, email, password) VALUES ($1, $2, $3);`,
    [name, email, password]
  );
}

async function selectUserFromSessions(userId) {
  return await db.query(`SELECT * FROM ${TABLE.SESSIONS} WHERE userid = $1;`, [
    userId,
  ]);
}

async function insertUserIntoSessions(userId, token) {
  return db.query(
    `INSERT INTO ${TABLE.SESSIONS} (userid, token) VALUES ($1, $2);`,
    [userId, token]
  );
}

export {
  selectUserToken,
  deleteUserFromSessions,
  selectUserByEmail,
  insertUserIntoUsers,
  selectUserFromSessions,
  insertUserIntoSessions,
};
