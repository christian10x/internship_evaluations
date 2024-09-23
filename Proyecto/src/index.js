import app from "./app.js";
import { sequelize } from "./database/database.js";

async function intit() {
  try {
    await sequelize.sync({ alter: true });
    app.listen(app.get("port"), () => {
      console.log("Server on port", app.get("port"));
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}

intit();
