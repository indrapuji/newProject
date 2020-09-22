const { Content } = require("../models");
const fs = require("fs");

// const serverUrl = "http://localhost:3001/"; // jangan lupa ganti
const serverUrl = "http://128.199.238.147:3002/";

class ContentController {
  static getAll(req, res) {
    Content.findAll()
      .then((data) => {
        res.status(200).json(data);
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }

  static getOne(req, res) {
    let id = req.params.id;
    let option = { where: { id } };
    Content.findOne(option)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: "Content not found",
          });
        } else {
          res.status(200).json(data);
        }
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Service Error",
        });
      });
  }

  static create(req, res) {
    const { category, title, text, status } = req.body;
    let option = { category, title, text,  status, userId: req.user.id };
    if (req.file) option.image_url = serverUrl + req.file.path;
    Content.create(option)
      .then((data) => {
        res.status(201).json({
          message: "Success create content",
          data,
        });
      })
      .catch((err) => {
        if (req.file) fs.unlinkSync(req.file.path);
        if (err.errors) {
          let errData = [];
          for (let i = 0; i < err.errors.length; i++) {
            errData.push(err.errors[i].message);
          }
          res.status(400).json({
            message: errData,
          });
        } else {
          res.status(500).json({
            message: "Internal Server Error",
          });
        }
      });
  }

  static update(req, res) {
    const id = req.params.id;
    const { category, title, text, status } = req.body;
    let input = { category, title, text, status, userId: req.user.id };
    if (req.file) input.image_url = serverUrl + req.file.path;
    let option = { where: { id } };
    let prevData = {};
    Content.findOne(option)
      .then((data) => {
        if (data) {
          prevData = data;
        }
        return Content.update(input, option);
      })
      .then((data) => {
        if (data) {
          const regex = new RegExp(serverUrl, "g");
          const prevPath = prevData.image_url.replace(regex, "");
          if (fs.existsSync(prevPath)) fs.unlinkSync(prevPath);
          res.status(200).json(input);
        } else {
          res.status(404).json({
            message: "Content not found",
          });
        }
      })
      .catch((err) => {
        if (req.file) fs.unlinkSync(req.file.path);
        if (err.errors) {
          let errData = [];
          for (let i = 0; i < err.errors.length; i++) {
            errData.push(err.errors[i].message);
          }
          res.status(400).json({
            message: errData,
          });
        } else {
          res.status(500).json({
            message: "Internal Server Error",
          });
        }
      });
  }

  static delete(req, res) {
    const id = req.params.id;
    const option = { where: { id } };
    let deleteData = [];
    Content.findOne(option)
      .then((data) => {
        if (!data) {
          res.status(404).json({
            message: "Content not found",
          });
        } else {
          deleteData = data;
          return Content.destroy(option);
        }
      })
      .then(() => {
        res.status(200).json({
          message: "Content has been delete",
          deleteData,
        });
      })
      .catch((err) => {
        res.status(500).json({
          message: "Internal Server Error",
        });
      });
  }
}

module.exports = ContentController;
