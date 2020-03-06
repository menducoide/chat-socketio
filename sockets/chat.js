module.exports = function(io) {
    var users = []; 
    var chat = io.of('/chat')    ;
    chat.on('connection', function (socket) {
       var user = socket.request._query['user'];
       console.log(user);
        if (typeof (user) != undefined || user != null)
            users.push(user);        
        socket.broadcast.emit('new user has connected', "the user " + user + " has connected");
        socket.on('send comment', function (p) {           
            socket.broadcast.emit('new comment', p)
        });
    });  
}




