import express from "express";
import * as apiConnect from "./controler.js";
import multer from "multer";

const upload = multer({ dest: "public" });
const router = express.Router();

router.get("/", (req, res) => {
  res.send("<h1>INI HOMEPAGE</h1>");
});
router.get("/product", apiConnect.product);
router.get("/product/:id", apiConnect.View);
router.post("/product", upload.single("image_url"), apiConnect.store);
router.put("/product/:id", upload.single("image_url"), apiConnect.update);

export default router;
