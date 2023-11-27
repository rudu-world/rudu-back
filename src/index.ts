import express from "express";
import "dotenv/config";
import cors from "cors";
import morgan from "morgan";

const APP_PORT = 8081;

const app = express();

app.use(express.json());
app.use(cors());
app.use(morgan("dev"));

app.get("/ping", (req, res) => res.status(200).send("pong"));

app.listen(APP_PORT, () => {
  console.log(`wow ${APP_PORT}`);
});
