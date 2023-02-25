import express from "express";
import cors from "cors";
import { initializeDB } from "./db/index.js";
import { TodosRouter } from "./routes/to-dos.router.js";

const api = express();

const apiPort = process.env["APP_ENV"] || 3000;

api.use(cors());
api.use(express.json());
api.use(express.urlencoded({ extended: false }));

api.use("/v1", TodosRouter);

api.listen(apiPort, () => {
  console.log(`API RUNNING ON PORT ${apiPort}`);
  initializeDB().then(() => console.log("DB INITIALIZED =D "));
});
