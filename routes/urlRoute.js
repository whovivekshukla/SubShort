const express = require("express");
const router = express.Router();

const { shortURL, redirectURL } = require("../controllers/urlController");

router.post("/", shortURL);
router.get("/:userShortURL", redirectURL);

module.exports = router;
