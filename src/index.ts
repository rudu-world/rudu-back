import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";

const APP_PORT = process.env.APP_PORT;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.listen(APP_PORT, () => {
  console.log(`wow ${APP_PORT}`);
});
