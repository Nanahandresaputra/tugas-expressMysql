import express from "express";
import logger from "morgan";
import cors from "cors";
import router from "./app/product/routes.js";
import path from "path";

const __dirname = path.resolve();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());
app.use(logger("dev"));
app.use("/public", express.static(path.join(__dirname, "public")));
app.use("/api/v1", router);
app.use(router);
app.use((req, res) => {
  res.status(404);
  res.send({
    status: "error",
    mesage: "error not found",
  });
});

app.listen(3000, console.log("server run http://localhost:3000"));
