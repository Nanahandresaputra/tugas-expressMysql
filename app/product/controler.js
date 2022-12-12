import productv2 from "./model.js";
import path from "path";
import fs from "fs";

const __dirname = path.resolve();

export let product = async (req, res) => {
  try {
    const result = await productv2.findAll();
    res.send(JSON.stringify(result, null, 2));
  } catch (e) {
    res.send(e);
  }
};

export let View = async (req, res) => {
  try {
    const result = await productv2.findAll({
      where: {
        id: req.params.id,
      },
    });
    res.send(result);
  } catch (e) {
    res.send(e);
  }
};

export let store = async (req, res) => {
  const { user_id, name, price, stock, status } = req.body;
  const image_url = req.file;
  if (image_url) {
    const target = path.join(__dirname, "public", image_url.originalname);
    fs.renameSync(image_url.path, target);
    res.send({ user_id, name, price, stock, status, image_url });
    try {
      await productv2.sync();
      const result = await productv2.create({ user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image_url.originalname}` });
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  }
};

export let update = async (req, res) => {
  const { user_id, name, price, stock, status } = req.body;
  const image_url = req.file;
  if (image_url) {
    const target = path.join(__dirname, "public", image_url.originalname);
    fs.renameSync(image_url.path, target);
    res.send({ user_id, name, price, stock, status, image_url });
    try {
      await productv2.sync();
      const result = await productv2.update(
        { user_id, name, price, stock, status, image_url: `http://localhost:3000/public/${image_url.originalname}` },
        {
          where: { id: req.params.id },
        }
      );
      res.send(result);
    } catch (e) {
      res.send(e);
    }
  }
};
