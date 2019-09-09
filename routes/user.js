const express = require("express");
const router = express.Router();

const { sayHi } = require("../controllers/user");

// takes in route and method
router.get("/", sayHi);

module.exports = router;
