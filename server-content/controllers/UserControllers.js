const { User } = require("../models");
const { comparePassword } = require("../helpers/bcrypt");
const jwt = require("jsonwebtoken");

class UserController {
  static register(req, res) {
    const { email, password } = req.body;
    let option = { where: { email } };
    User.findOne(option)
      .then((user) => {
        if (user) {
          res.status(400).json({
            message: "User already exist",
          });
        } else {
          return User.create({
            email,
            password,
          });
        }
      })
      .then((newUser) => {
        res.status(201).json({ newUser });
      })
      .catch((err) => {
        console.log(err);
        res.status(500).json({
          message: "Internal server error",
        });
      });
  }

  static login(req, res) {
    const { email, password } = req.body;
    let option = { where: { email } };
    User.findOne(option)
      .then((user) => {
        if (!user) {
          res.status(404).json({
            message: "User not found",
          });
        } else {
          if (comparePassword(password, user.password)) {
            const token = jwt.sign(
              {
                id: user.id,
                email: user.email,
              },
              process.env.SECRET
            );
            res.status(200).json({ email, token });
          } else {
            res.status(400).json({
              message: "Wrong password",
            });
          }
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal server error",
        });
      });
  }
}

module.exports = UserController;
