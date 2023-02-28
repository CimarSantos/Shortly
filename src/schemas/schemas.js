import Joi from "joi";

const emailSchema = Joi.string().trim().email().required();
const passwordSchema = Joi.string().trim().required();

const schemas = {
  signUpSchema: Joi.object().keys({
    name: Joi.string().trim().required(),
    email: Joi.string().trim().required(),
    password: Joi.string().trim().required(),
    confirmPassword: Joi.string().trim().valid(Joi.ref("password")).required(),
  }),
  signInSchema: Joi.object({
    email: emailSchema,
    password: passwordSchema,
  }),
  paramsIdSchema: Joi.object({
    id: Joi.number().positive().integer(),
  }),
  paramsShortUrlSchema: Joi.object({
    shortUrl: Joi.string().trim().length(8).required(),
  }),
};

export { schemas };
