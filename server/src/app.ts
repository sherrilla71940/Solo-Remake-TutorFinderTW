import express from "express";
import cors from "cors";
import router from "./router";
import path from "path";
const app = express();
// const envFileAbsPath = path.resolve(__dirname, "../../.env");
console.log(__dirname);
console.log(path.join(__dirname + "/../.env"));
import dotenv from "dotenv";
// dotenv.config({ path: envFileAbsPath });
dotenv.config({ path: path.join(__dirname + "/../.env") });
export const PORT = process.env.PORT;
export const HOST = process.env.HOST;

// in readme remember to instruct how to set up env variables to run application
app.use(cors({ origin: `*` }));
app.use(express.json());
app.use(router);

export default app;
