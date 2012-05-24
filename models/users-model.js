var Schema = mongoose.Schema
  , ObjectId = Schema.ObjectId;

var User = new Schema({
    id    : ObjectId
  , title     : String
  , name      : String
});

var exports = module.exports = mongoose.model('User', User);






