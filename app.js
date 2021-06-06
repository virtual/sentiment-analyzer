const express = require("express");
const app = express();
const sa = require('./analyzer.js')
require('dotenv').config();
const logger = require('./modules/logger');

// Used by Replit to show react FE
if (process.env.NODE_ENV === 'production') { 
  app.use(express.static("./public/build"));
} else {
  app.use(express.static("public"));  
}
app.use(logger.express);
app.get("/", (req, res) => {
  console.log('connected to /')
});

// Needed in order to read axios req data
app.use(express.json())

app.post("/post", (req, res) => {
  console.log("Connected to React");
  res.end(sa.AnalyzeSentiment(req.body.lyrics))
});

const PORT = process.env.PORT || 8080;

app.listen(PORT, console.log(`Server started on port ${PORT}`));
