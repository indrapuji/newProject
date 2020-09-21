const jwt = require("jsonwebtoken");
const { User } = require("../models");

const authentication = function (req, res, next) {
  try {
    const { access_token } = req.headers;
    const decoded = jwt.verify(access_token, process.env.SECRET);
    req.user = decoded;
    const option = { where: { email: req.user.email } };
    User.findOne(option).then((user) => {
      if (!user) {
        res.status(404).json({
          message: "User not found",
        });
      }
    });
    next();
  } catch (error) {
    res.status(401).json({
      message: "Forbidden access",
    });
  }
};

module.exports = authentication;
