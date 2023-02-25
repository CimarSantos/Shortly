import Joi from "joi";

const signUpSchema = Joi.object().keys({
  name: Joi.string().min(5).required(),
  email: Joi.string().required(),
  password: Joi.string().required(),
  confirmPassword: Joi.ref("password"),
});

export { signUpSchema };
