const { Content } = require("../models");

const authorization = function (req, res, next) {
  let id = req.params.id;
  let option = { where: { id } };
  Content.findOne(option)
    .then((data) => {
      if (!data) {
        res.status(404).json({
          message: "Content not found",
        });
      } else {
        if (data.userId !== req.user.id) {
          res.status(401).json({
            message: "Forbidden access",
          });
        }
      }
      next();
    })
    .catch((err) => {
      res.status(500).json({
        message: "Internal server Error",
      });
    });
};

module.exports = authorization;
