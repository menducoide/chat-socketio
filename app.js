var express = require('express')
var fs = require('fs')
var https = require('https')
const app = express()
const bodyParser = require('body-parser');
const session  = require('express-session');
app.use(session({
    secret: 'session',
    resave: false,
    saveUninitialized: true
}));
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());

require('./controllers/default')(app);
require('./controllers/src')(app);
require('./controllers/login')(app);
 
var server = https.createServer({
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.cert')
}, app);
require('./sockets/io')(server);

server.listen(3344);