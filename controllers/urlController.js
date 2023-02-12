const URL = require("../model/URL");
const CustomError = require("../errors");
const crypto = require("crypto");
const StatusCodes = require("http-status-codes");

const shortURL = async (req, res) => {  
  const { url } = req.body;
  const shortURL = crypto.randomBytes(5).toString("hex");
  const shortenURL = await URL.create({
    shortURL: shortURL,
    longURL: url,
  });

  res.status(StatusCodes.CREATED).json({ shortURL: shortenURL });
};

const redirectURL = async (req, res) => {
  const { userShortURL } = req.params;
  const redirectURL = await URL.findOne({ shortURL: userShortURL });
  if (!redirectURL) {
    throw new CustomError.BadRequestError("Invalid URL");
  }

  res.redirect(redirectURL.longURL);
};

module.exports = {
  shortURL,
  redirectURL,
};