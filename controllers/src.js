module.exports = function (app) {
    app.get('/src/js/:id', function (req, res) {
        var dir = __dirname.replace('controllers','');
        console.log(dir);
        res.sendFile(dir + 'src/js/' + req.params['id']);
    });
    app.get('/src/css/:id', function (req, res) {
        res.sendFile(__dirname.replace('controllers','') + 'src/css/' + req.params['id']);
    });
}