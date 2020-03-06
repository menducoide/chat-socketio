module.exports = function (app) {
    app.get('/', function (req, res) {
        if (req.session.user != null)
            res.sendFile(__dirname.replace('controllers','') + 'index.html');
        else
            res.sendFile(__dirname.replace('controllers','') +'login.html');
    });
}