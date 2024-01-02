// require("dotenv").config({ path: "../" });
import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
import { app } from "./app.js";
dotenv.config({
  path: "./.env",
});

connectDb()
  .then(() => {
    app.on("error", (error) => {
      console.log(error);
      throw error;
    });
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server started on port ${process.env.PORT}`);
    });
  })
  .catch((err) => {
    console.log("MONGODB connection error: " + err);
  });
