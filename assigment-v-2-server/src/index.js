import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import api from "./routers/api/index.js";
import { GET_DB } from "./configs/db.configs.js";

GET_DB();
const app = express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/", api);

app.listen(3008, () => {
    console.log(`app chạy trên công 3008`);
});
