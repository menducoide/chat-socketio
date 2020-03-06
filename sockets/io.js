module.exports = function(server) {   
    var io = require('socket.io')(server);
    // io.on('connection', function (socket) {
    //     var user = socket.handshake.query['user']
    //     if (typeof (user) != undefined || user != null)
    //         users.push(user);        
    //     socket.emit('new comment', "user " + user + "has been connected");
    //     socket.on('send comment', function (p) {
           
    //         socket.broadcast.emit('new comment', p)
    //     });
    // }); 
    require('./chat')(io);
    
}

 