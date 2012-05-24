var User = mongoose.model('User');

module.exports = function(app) {

    app.get('/', function(req, res) {
        User.find({}, function(err, obj) {
            res.render('index', {
                users: obj
            });
        });
    });

    app.post('/new_user', function(req, res) {
        var user = new User(req.body);
        user.save(function(err) {
            });
        res.redirect('/');
    });

}


/*

	  docs.forEach(function(obj){
	  	console.log(obj.title);
	  });


instance.title = 'hello';
instance.save(function (err) {
});

MyModel.find({}, function (err, docs) {
  docs.forEach(function(obj){
  	console.log(obj.title);
  });
});
*/
