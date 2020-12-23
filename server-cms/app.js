require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const routers = require('./routers');
const errorHandler = require('./middlewares/errorHandler');
const fs = require("fs");

const app = express();

app.use('/uploads', express.static('uploads'));
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/files/all', (req, res) => {
	let html = '<ul>';
	fs.readdirSync('./uploads').forEach(file => {
		html += `<li><a href="/uploads/${file}">${file}</a></li>`;
	});
	html += '</ul>';

	res.send(html);
});

app.use(routers);
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
