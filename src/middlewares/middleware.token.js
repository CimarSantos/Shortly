import { STATUS_CODE } from "../enums/statusCode.js";
import * as authRepository from "../repositories/authRepository.js";

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

export { usersMeValidationToken };
