import path from "path";

import "dotenv/config";
import express, { Application, Request, Response } from "express";

// App
const app: Application = express();

// Set '/public' For Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Route
app.get("/", (_: Request, res: Response) => {
  res.render("index", {
    msg: "Hello",
  });
});

const { PORT, HOST, NODE_ENV } = process.env;
app.listen(PORT, () => {
  console.log(
    `Server is Running on -> http://${HOST}:${PORT} and ${NODE_ENV} Mode`
  );
});
