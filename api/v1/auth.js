const express = require("express");
const { v4 } = require('uuid');

const router = express.Router();

/**
 * Login API
 *
 * @return token.
 */
router.post("/login/", async (req, res) => {
  res.json({
    token: v4()
  });
});

/**
 * Register API
 *
 * @return token.
 */
router.post("/register/", async (req, res) => {
  res.json({
    token: v4()
  });
});

module.exports = router;
