'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _http = require('http');

var _http2 = _interopRequireDefault(_http);

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _bodyParser = require('body-parser');

var _bodyParser2 = _interopRequireDefault(_bodyParser);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _config = require('./config.json');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var app = (0, _express2.default)();
app.server = _http2.default.createServer(app);

app.use(_express2.default.static(_path2.default.join(__dirname, 'admin')));
app.get('*', function (req, res) {
	res.sendFile(_path2.default.join(__dirname, 'admin/index.html'));
});

app.use(_bodyParser2.default.json({
	limit: _config2.default.bodyLimit
}));

app.server.listen(process.env.PORT || _config2.default.port, function () {
	console.log('Started on port ' + app.server.address().port);
});

exports.default = app;
//# sourceMappingURL=index.js.map