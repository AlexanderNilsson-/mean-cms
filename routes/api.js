var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/cms');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function callback () {
  console.log("Connected to DB.");
});

var contactSchema = mongoose.Schema({ firstname: 'string', lastname: 'string', age: 'number' });
var Contact = mongoose.model('Contact', contactSchema);

exports.contacts = function(req, res) {
  Contact.find({}, function(err, obj) {
    res.json(obj)
  });
};

exports.contact = function(req, res) {
  Contact.findOne({ _id: req.params.id }, function(err, obj) {
    res.json(obj);
  });
};

exports.createContact = function(req, res) {
  var contact = new Contact(req.body);
  contact.save();
  res.json(req.body);
};

exports.updateContact = function(req, res) {
  Contact.findByIdAndUpdate(req.params.id, {
    $set: { firstname: req.body.firstname, lastname: req.body.lastname, age: req.body.age }
  }, { upsert: true },
  function(err, obj) {
    return res.json(true);
  });
};

exports.destroyContact = function(req, res) {
  Contact.remove({ _id: req.params.id }, function(err) {
    res.json(true);
  });
};