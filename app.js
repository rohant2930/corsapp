// server.js
require("dotenv").config();
const cors_proxy = require('cors-anywhere');

// Listen on a specific port via the PORT environment variable
const host = process.env.HOST || '0.0.0.0';
const port = process.env.PORT || 8080;


cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    requireHeader: ['origin', 'x-requested-with'],
    removeHeaders: ['cookie', 'cookie2']
}).listen(port, host, function() {
    console.log('Running CORS Anywhere on ' + host + ':' + port);
});
