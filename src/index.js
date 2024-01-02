// require("dotenv").config({ path: "../" });
import dotenv from "dotenv";
import { connectDb } from "./db/index.js";
dotenv.config({
  path: "./.env",
});

connectDb();

/*
    //THE FOLLOWING APPROACH IS NOT A GOOD APPROACH
import express from "express";
const app = express();

(async () => {
  try {
    await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`);
    app.on("error", (error) => {
      console.log("ERROR: Couldn't connect to MongoDb");
      throw error;
    });
    app.listen(process.env.PORT, () => {
      console.log("listening on port " + process.env.PORT);
    });
  } catch (error) {
    console.log("Error", error);
  }
})();

**/
