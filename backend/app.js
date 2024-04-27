import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import { sigin, getmessage, generate } from "./controllers.js";

// Configurations
dotenv.config();
const app = express();
app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/signin", async (req, res) => {
  console.log(req.body);
  await sigin(req.body, res);
});
app.post("/getmessages", async (req, res) => {
  console.log(req.body.userid);
  await getmessage(req.body.userid, res);
});
app.post("/generate", async (req, res) => {
  const { uid, Text } = req.body;
  console.log(req.body);
  await generate({ uid, Text }, res);
});

const PORT = process.env.PORT || 5000;
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => console.log(`Server Port: ${PORT}`));
  })
  .catch((error) => {
    console.log(`${error} did not connect`);
  });

  export default app