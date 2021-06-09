const {functions} = require("./app/config");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({origin: true}));

app.get("/api/test/", (req, res) =>{
  return res.status(200).send("Hello world");
});

// Export the api to firebase cloud functions
exports.app = functions.region("asia-southeast2").https.onRequest(app);
