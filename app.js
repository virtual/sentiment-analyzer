const express = require("express");
const app = express();
const sa = require('./index.js')
// app.get("/public", (req, res) => {
//   res.redirect("/");
// });
// Needed in order to read axios req data
app.use(express.json())

app.post("/post", (req, res) => {
  console.log("Connected to React");
  // console.log(req.body.lyrics)
  res.end(sa.AnalyzeSentiment(req.body.lyrics))
  // res.redirect("/");
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
