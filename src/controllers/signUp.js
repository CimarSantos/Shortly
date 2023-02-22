import { db } from "../database/database.js";

async function signUp(req, res) {
  const { name, email, password, confirmPassword } = req.body;
  const date = new Date();

  try {
    const { rowCount } = await db.query(
      `INSERT INTO users (name, email, password, "confirmPassword", "createdAt") SELECT $1, $2, $3, $4, $5 WHERE NOT EXISTS (SELECT * FROM users WHERE email = $6);`,
      [name, email, password, confirmPassword, date, email]
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

export { signUp };
