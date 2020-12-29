require('dotenv').config();
const express = require('express');
const PORT = process.env.PORT || 3001;
const cors = require('cors');
const routers = require('./routers');
const errorHandler = require('./middlewares/errorHandler');
const fs = require("fs");
const serverUrl = require("./helpers/serverUrl");

const app = express();

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));

app.use('/uploads', express.static('uploads'));
app.use(cors());

app.get('/files/all', (req, res) => {
	let html = '<ul>';
	fs.readdirSync('./uploads').forEach(file => {
		if (file !== ".gitkeep") html += `<li><a href="/uploads/${file}">${file}</a> <br /> LINK: ${serverUrl + "uploads/" + file} </li>`;
	});
	html += '</ul>';

	html += `
	<br />
	<br />
	<form action="/upload-pdf" method="POST" enctype="multipart/form-data">
	<input type="file" name="pdf">
	<input type="submit">
	</form>`;

	res.send(html);
});

// app.get('/', (req, res) => {
// 	const html = `
// 	<a href="/all">All Files</a>
// 	<form action="/" method="POST" enctype="multipart/form-data">
// 	<input type="file" name="image">
// 	<input type="submit">
// 	</form>`;

// 	res.send(html);
// });

// app.post('/', (req, res) => {
// 	const storage = multer.diskStorage({
// 		destination: function (req, file, cb) {
// 			cb(null, 'public/images/')
// 		},
// 		filename: function (req, file, cb) {
// 			cb(null, Date.now() + path.extname(file.originalname))
// 		}
// 	});

// 	const upload = multer({ storage: storage }).single('image');

// 	upload(req, res, function (err) {
// 		if (err instanceof multer.MulterError) {
// 			res.send(err);
// 		} else if (err) {
// 			res.send(err);
// 		} else {
// 			res.redirect('/all');
// 		}
// 	});
// });


app.use(routers);
app.use((req, res) => {
  res.status(404).send('Not Found');
});

app.use(errorHandler);

app.listen(PORT, () => console.log(`Listening on port ${PORT}`));
