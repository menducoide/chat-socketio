 
module.exports = function(app){   
    app.get('/login', function (req, res) {
        res.sendFile(__dirname.replace('controllers/','') + '/login.html');
    });
    app.post('/login', function(req,res){
        if(req.session.user!=null)
        {
            res.status(200).json(req.session.user);
            return;
        }  
        var user = req.body;             
        if(typeof(user)!= undefined && user!=null){
            if(user.userName != "" && user.room!=""){
                req.session.user = user;
                res.status(200).json(user);
                return;
            }
        }
        res.sendStatus(400);
    });    
}