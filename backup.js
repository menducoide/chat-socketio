var app = require('express')();
var server = require('http').Server(app);


var io = require('socket.io')(server);
var users = [];
app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

io.on('connection', function (socket) {
    var user = socket.handshake.query['user']
    if (typeof (user) != undefined || user != null)
        users.push(user);        
    socket.emit('new comment', "user " + user + "has been connected");
    socket.on('send comment', function (p) {
        console.log(p)
        socket.broadcast.emit('new comment', p)
    });
});
server.listen(3344);