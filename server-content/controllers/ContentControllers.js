const { Content } = require("../models");

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
    const { category, title, image_url, text } = req.body;
    Content.create({
      category,
      title,
      image_url,
      text,
      userId: req.user.id,
    })
      .then((data) => {
        res.status(201).json({
          message: "Success create content",
          data,
        });
      })
      .catch((err) => {
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
    const { category, title, image_url, text } = req.body;
    let input = { category, title, image_url, text, userId: req.user.id };
    let option = { where: { id } };
    Content.update(input, option)
      .then((data) => {
        if (data) {
          res.status(200).json({
            category,
            title,
            image_url,
            text,
          });
        } else {
          res.status(404).json({
            message: "Content not found",
          });
        }
      })
      .catch((err) => {
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
