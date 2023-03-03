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
    return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
  }

  next();
}

export { urlTokenValidation };
