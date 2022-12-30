import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import dotenv from 'dotenv';

import routeIndex from "./routes/index.js";
import usersIndex from "./routes/users.js";

const app = express();
dotenv.config();


app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/movies", routeIndex);
app.use("/user", usersIndex);

// const SERVER = process.env.CONNECTION_URL;

const PORT = process.env.PORT;


mongoose.set('strictQuery', false);

mongoose
  .connect("mongodb://mongo-db/test123", { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Express is listening on Port ${PORT} and connected to DB`);
    });
  })
  .catch((error) => {
    console.log(error.massage);
  });

