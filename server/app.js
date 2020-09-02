const express = require("express");
const app = express();
const PORT = 3001;
const cors = require("cors");
const router = require("./routers");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/", router);

app.listen(PORT, () => console.log(`Listening on Port: ${PORT}!`));
