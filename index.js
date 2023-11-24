var http = require("http");
var fs = require("fs");
var url = require("url");

http
  .createServer(function (req, res) {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;
    switch (req.url) {
      case "/": {
        fs.readFile("./index.html", (err, data) => {
          if (err) {
            throw new Error("[FS] Reading file error" + err);
          }
          res.end(data);
        });
        break;
      }
      case "/about": {
        fs.readFile("./about.html", (err, data) => {
          if (err) {
            throw new Error("[FS] Reading file error" + err);
          }
          res.end(data);
        });
        break;
      }
      case "/contact-me": {
        fs.readFile("./contact-me.html", (err, data) => {
          if (err) {
            throw new Error("[FS] Reading file error" + err);
          }
          res.end(data);
        });
        break;
      }
      default: {
        res.statusCode = 404;
        fs.readFile("./404.html", (err, data) => {
          if (err) {
            throw new Error("[FS] Reading file error" + err);
          }
          res.end(data);
        });
      }
    }
  })
  .listen(8080);
