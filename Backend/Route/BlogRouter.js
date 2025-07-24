const express = require("express");
const {
  create,
  deleteById,
  findAll,
  findById,
} = require("../Controller/BlogController");

const router = express.Router();

router.post("/create", create);
router.delete("/delete/:id", deleteById);
router.get("/get", findAll);
router.get("/findByid/:id", findById);

module.exports = router;
