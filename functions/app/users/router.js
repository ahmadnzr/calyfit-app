// eslint-disable-next-line new-cap
const router = require("express").Router();
const userController = require("./controller");

router.post("/users", userController.store);

module.exports = router;
