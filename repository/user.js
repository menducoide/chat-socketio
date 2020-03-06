var users = [];
const uuidv4 = require('uuid/v4');
exports.login =  function login(userName,room) {
    var user = users.find(s => s.userName === userName);
    if (user == null) {
        user = {
            id: uuidv4(),
            userName: userName,
            room: room
        }
        users.push(user);
    }
    return user.id;
}
 exports.logout = function logout(id) {
    users = users.filter(s => s.id !== id);
}

