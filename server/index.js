const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const mysql = require("mysql2");

app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req,res) => {
    res.send("Hello there");
})

app.listen(3000, () =>
  console.log("Server has started on port 3000 for MSN01CRTCL")
);
