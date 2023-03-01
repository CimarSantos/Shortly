import { db } from "../database/database.js";
import { STATUS_CODE } from "../enums/statusCode.js";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";
import { v4 as uuid } from "uuid";

async function signUp(req, res) {
  const { name, email, password } = req.body;
  const hashPassword = bcrypt.hashSync(password, 10);
  const date = new Date();

  try {
    const { rowCount } = await db.query(
      `INSERT INTO users (name, email, password, "createdAt") SELECT $1, $2, $3, $4 WHERE NOT EXISTS (SELECT * FROM users WHERE email = $5);`,
      [name, email, hashPassword, date, email]
    );
    if (rowCount === 1) return res.sendStatus(201);
    else
      return res
        .status(409)
        .send("Este email já existe. Tente outro ou faça login.");
  } catch (error) {
    return res.status(500).send(error.message);
  }
}

async function signIn(req, res) {
  const { password } = req.body;
  const { user } = res.locals;
  const validPassword = bcrypt.compareSync(password, user.password);

  try {
    if (!validPassword) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    const token = uuid();

    const { rows: sessionExists } = await authRepository.selectUserFromSessions(
      user.id
    );

    if (sessionExists.length !== 0) {
      await authRepository.deleteUserFromSessions(sessionExists[0].token);
    }
    
    await authRepository.insertUserIntoSessions(user.id, token);
    return res.status(STATUS_CODE.OK).send({ token });
  } catch (error) {
    return res.sendStatus(STATUS_CODE.SERVER_ERROR);
  }
}

export { signUp, signIn };
