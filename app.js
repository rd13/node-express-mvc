
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')
  , fs = require('fs');
  

//MongoDB Connection
mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/test');


var app = module.exports = express.createServer();

// App Configuration
app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'hbs');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});


app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true }));
});

app.configure('production', function(){
  app.use(express.errorHandler());
});

// Bootstrap models
var models_path = __dirname + '/models'
var model_files = fs.readdirSync(models_path)
model_files.forEach(function(file){
    require(models_path+'/'+file)
});

// Bootstrap controllers
var controllers_path = __dirname + '/controllers'
var controller_files = fs.readdirSync(controllers_path)
controller_files.forEach(function(file){
  require(controllers_path+'/'+file)(app)
});

app.listen(3000, function(){
  console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
});
