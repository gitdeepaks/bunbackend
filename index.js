import express from "express";

const app = express();
const port = process.env.PORT;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
  res.send("Hello Twitter!");
});

app.get("/login", (req, res) => {
  res.send("<h1>please Login to Login Page</h1>");
});

app.get("/youtube", (req, res) => {
  res.send("<h2>Hello Youtube!</h2>");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
