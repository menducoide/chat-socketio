const users = [];
exports.find = function(s) {
   return users.find(u=> s(u));
}
exports.push = function(u) {
    users.push(u);
}
exports.delete = function(s){
    users = users.filter(u=>s(u));
}


