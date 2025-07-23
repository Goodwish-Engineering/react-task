const express = require("express");
const { signin } = require("../Controller/UserController");

const router = express.Router();

router.post("/signin", signin);

module.exports = router;
