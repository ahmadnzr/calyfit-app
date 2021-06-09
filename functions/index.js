const userController = require("./app/users/router");
const {functions} = require("./app/config");
const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors({origin: true}));

app.use("/api", userController);

// Export the api to firebase cloud functions
exports.app = functions.region("asia-southeast2").https.onRequest(app);
