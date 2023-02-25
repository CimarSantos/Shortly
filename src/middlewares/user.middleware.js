import { signUpSchema } from "../schemas/authSchema.js";

function validateSignUp(req, res, next) {
  const { name, email, password, confirmPassword } = req.body;
  const { error } = signUpSchema.validate(
    { name, email, password, confirmPassword },
    { abortEarly: false }
  );
  if (error) {
    const message = error.details.map((d) => d.message);
    return res.status(422).send(message);
  }

  next();
}

export { validateSignUp };
