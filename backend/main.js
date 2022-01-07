const express = require("express");
const app = express();
app.use(express.json());

const cors = require("cors");
app.use(cors());

const { getmsg, postmsg } = require("./data");

app.get("/getmsg", async (req, res) => {
  const list = await getmsg();
  res.json(list);
});

app.post("/postmsg", async (req, res) => {
  const list = req.body;
   await postmsg(list);
  res.json("Succefully Added");
});

app.listen(4000, () => console.log("express server started.."));
