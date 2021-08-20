const express = require("express");
const app = express();

app.get("/test", (req, res) => {
  res.send("Our api server is working correctly");
});

app.listen(3020, () => {
  console.log("Started api service");
});
