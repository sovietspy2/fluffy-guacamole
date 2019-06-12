const express = require("express");

const app = express();

app.listen(8080, () => console.log("Server started"));

app.get("/test", (req, res) => {
  console.log("RQ");
  res.send("HELO THERE");
});

app.use("/", express.static(path.join(__dirname, "frontend/build")));
// serving the react frontend with method we can avoid CORS problems in production enviornment
