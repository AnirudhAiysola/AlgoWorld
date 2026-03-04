import express from "express";
import { ENV } from "./lib/env.js";

const app = express();

app.get("/", (req, res) => {
  res.status(200).json({ message: "Hello, World 111!" });
});

app.listen(ENV.PORT, () => {
  console.log(`Server is running on port number ${ENV.PORT}`);
});
