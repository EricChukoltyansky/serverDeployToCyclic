const express = require("express");
const path = require("path");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

app.use(express.static(path.join(__dirname, "./client/build")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

app.get("/api", (req, res) => {
  res.json({ users: ["John", "Paul", "George", "Ringo"] });
});

app.listen(5000, () => console.log("Listening on port 5000..."));

// git init
// git add README.md
// git commit -m "first commit"
// git branch -M main
// git remote add origin https://github.com/EricChukoltyansky/deployment.git
// git push -u origin main
