import { Sequelize } from "sequelize";

const sequelize = new Sequelize({
  username: "root",
  password: "root",
  database: "eduwork-crudv2",
  host: "localhost",
  dialect: "mysql",
});

(async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
})();

export default sequelize;
