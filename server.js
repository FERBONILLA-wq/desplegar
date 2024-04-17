import express from "express";
import session from "express-session";

const app = express();

app.get("/", (req, res) => {
  res.send("Welcome to the server");
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
