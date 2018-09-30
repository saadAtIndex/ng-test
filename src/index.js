import http from 'http';
import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import config from './config.json';

let app = express();
app.server = http.createServer(app);

app.use(express.static(path.join(__dirname, 'cross-storage')));
app.get('/cross-storage', (req, res) => {
	res.sendFile(path.join(__dirname, 'cross-storage/example/hub.html'));
});


app.use(express.static(path.join(__dirname, 'admin')));
app.get('*', (req, res) => {
	res.sendFile(path.join(__dirname, 'admin/index.html'));
});





app.use(bodyParser.json({
	limit: config.bodyLimit
}));

app.server.listen(process.env.PORT || config.port, () => {
	console.log(`Started on port ${app.server.address().port}`);
});


export default app;
