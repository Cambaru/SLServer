"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var http = require("http");
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    for (var i = 0; i < 100; i++) {
        res.end(i + 'Hallo Welt2\n');
    }
}).listen(port);
//# sourceMappingURL=server.js.map