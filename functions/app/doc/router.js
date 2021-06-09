// eslint-disable-next-line new-cap
const router = require("express").Router();
const docController = require("./controller");

router.get("/", docController.getDoc);

module.exports = router;
