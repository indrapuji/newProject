require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 3002;
const cors = require("cors");
const Router = require("./routers");

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/", Router);
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}!`));
