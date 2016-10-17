const http = require('http');
http.createServer(function (req, res) {
    if (req.url === '/hello') {
        res.end('<h1 style="text-align: center"> Hello World </h1>');
    } else if (req.url === "/Vazgen") {
        res.end('<h1 style="text-align: center"> Hello Vazgen :) </h1>');
    } else if (req.url === "/Armen") {
        res.end('<h1 style="text-align: center"> Hello Armen :) </h1>');
    } else if (req.url === "/Zara") {
        res.end('<h1 style="text-align: center"> Hello Zara :) </h1>');
    }  else if (req.url === "/Rouben") {
        res.end('<h1 style="text-align: center"> Hello Rouben :) </h1>');
    }

}).listen(3001);
