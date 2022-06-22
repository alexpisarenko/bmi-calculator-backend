const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/index.html");
});

app.post("/", function (req, res) {
  const num1 = Number(req.body.num1);
  const num2 = Number(req.body.num2);
  const result = num1 + num2;

  res.send("Result: " + result);
});

app.get("/bmicalculator", function (req, res) {
  res.sendFile(__dirname + "/bmicalculator.html");
});

app.post("/bmicalculator", function (req, res) {
  const weight = parseFloat(req.body.weight);
  const height = parseFloat(req.body.height);

  const bmi = weight / (height * height);

  res.send("Your BMI is " + bmi.toFixed(1));
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
