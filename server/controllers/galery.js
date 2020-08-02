const { Galery } = require("../models");

class GaleryController {
  static getAll(req, res) {
    Galery.findAll()
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
      
  }
}
