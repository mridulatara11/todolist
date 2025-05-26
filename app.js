const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let tasks = [];

app.get("/", (req, res) => {
  res.render("index", { tasks });
});

app.post("/add", (req, res) => {
  const task = req.body.newTask;
  if (task.trim()) tasks.push(task);
  res.redirect("/");
});

app.post("/delete", (req, res) => {
  const taskIndex = parseInt(req.body.taskIndex);
  tasks.splice(taskIndex, 1);
  res.redirect("/");
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
