const express = require("express");
const app = express();
const sa = require('./index.js')

require('dotenv').config();

/* passport has strategies which are functions that prove that a user trying to hit your server has permission */
if (process.env.NODE_ENV === 'production') { 
  app.use(express.static("./public/build"));
} else {
  app.use(express.static("public"));  
}

app.get("/", (req, res) => {
  // res.redirect("/3000");
  console.log('connected to /')
});
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
