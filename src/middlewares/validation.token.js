import * as crypto from "crypto";
import { STATUS_CODE } from "../enums/statusCode.js";
import * as authRepository from "../repositories/authRepository.js";

async function tokenValidation(req, res, next) {
  const token = req.headers.authorization?.replace("Bearer ", "");

  try {
    const session = await authRepository.selectUserSession(token);

    if (!session) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    const isEqual = crypto.timingSafeEqual(
      Buffer.from(token),
      Buffer.from(session.token)
    );

    if (!isEqual) {
      return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
    }

    res.locals.userId = session.userId;
  } catch (error) {
    return res.sendStatus(STATUS_CODE.UNAUTHORIZED);
  }

  next();
}

export { tokenValidation };
