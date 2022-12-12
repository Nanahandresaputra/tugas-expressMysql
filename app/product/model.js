import sequelize from "../../config/mysql.js";
import { DataTypes } from "sequelize";

const productv2 = sequelize.define("productv2", {
  user_id: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  stock: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  status: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
  },
  image_url: {
    type: DataTypes.TEXT,
  },
});

export default productv2;
