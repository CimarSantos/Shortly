import express from "express";
import cors from "cors";
import chalk from "chalk";
import dotenv from "dotenv";
import userRouter from "./routers/authRouter.js";
import urlsRouter from "./routers/urlRouter.js";

dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());

app.use(userRouter);
app.use(urlsRouter);

app.listen(process.env.PORT, () => {
  console.log(chalk.cyan(`Server running on port ${process.env.PORT}`));
});
