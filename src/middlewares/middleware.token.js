import jwt from "jsonwebtoken";
import { STATUS_CODE } from "../enums/statusCode.js";
import * as authRepository from "../repositories/authRepository.js";

async function urlTokenValidation(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    const { rows: isValidToken } = await authRepository.selectUserToken(token);
    console.log(isValidToken.length);
    if (isValidToken.length === 0) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    res.locals.userId = isValidToken.userId;
  } catch (error) {
    /* await authRepository.deleteUserFromSessions(token); */

    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }

  next();
}

async function usersMeValidationToken(req, res, next) {
  const { authorization } = req.headers;
  const token = authorization?.replace("Bearer ", "");

  try {
    if (
      !authorization ||
      authorization === "" ||
      typeof authorization !== "string"
    )
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    const tokenExist = await authRepository.selectUserToken(token);

    if (!tokenExist.rows[0]) return res.sendStatus(STATUS_CODE.NOT_FOUND);

    res.locals.id = tokenExist.rows[0].userid;

    next();
  } catch (error) {
    console.log(error);
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }
}

export { usersMeValidationToken, urlTokenValidation };
