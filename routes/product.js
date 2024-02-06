const express = require("express");
const router = express.Router();

const { handleGetProduct } = require("../controllers/product");

router.get("/", handleGetProduct);

module.exports = router;
