require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const routers = require('./routers');

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routers);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
