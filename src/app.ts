import path from "path";
import fs from "fs";

import "dotenv/config";
import express, { Application, Request, Response } from "express";

// App
const app: Application = express();

// Set '/public' For Static Files
app.use(express.static(path.join(__dirname, "public")));

// View Engine
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// Read Data from Json File
let jsonFilePath = process.argv[2] || "./resoume.json";
const data = JSON.parse(fs.readFileSync(jsonFilePath).toString());

// Route
app.get("/", (_: Request, res: Response) => {
  res.render("index", { data });
});

const { PORT, HOST, NODE_ENV } = process.env;
app.listen(PORT, () => {
  console.log(
    `Server is Running on -> http://${HOST}:${PORT} and ${NODE_ENV} Mode`
  );
});
