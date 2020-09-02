const { User } = require("../models");
const jwt = require("jsonwebtoken");
const { compare } = require("../helpers/bcrypt");

class UserController {
  static register(req, res) {
    const { nama, email, password, role } = req.body;
    let option = { where: { email } };
    User.findOne(option)
      .then((user) => {
        if (user) {
          res.status(400).json({ message: "User sudah terdaftar" });
        } else {
          return User.create({ nama, email, password, role });
        }
      })
      .then((newUser) => {
        res.status(201).json({ message: "User Created" });
      })
      .catch((err) => {
        if (err.errors) {
          let errData = [];
          for (let i = 0; i < err.errors.length; i++) {
            errData.push(err.errors[i].message);
          }
          res.status(400).json({ message: errData });
        } else {
          res.status(500).json({ message: "Internal service error" });
        }
      });
  }

  static login(req, res) {
    const { email, password } = req.body;
    let option = { where: { email } };
    User.findOne(option)
      .then((user) => {
        if (!user) {
          res.status(404).json({ message: "User tidak terdaftar" });
        } else {
          if (compare(password, user.password)) {
            const token = jwt.sign({ id: user.id, email: user.email }, process.env.SECRET);
            const { nama, role } = user;
            res.status(200).json({ nama, role, token });
          } else {
            res.status(400).json({ message: "Password salah" });
          }
        }
      })
      .catch((err) => {
        res.status(500).json({ message: "Internal Server Error" });
      });
  }
}

module.exports = UserController;
