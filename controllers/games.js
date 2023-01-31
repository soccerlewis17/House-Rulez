const Game = require('../models/game')

module.exports = {
    index,
    show,
}

function show(req, res) {
  console.log(req.user, '<---- req.user');
  console.log(req.session, '<---- req.session');

  Request.findById(req.params.id, function(err, requestDoc){
    res.json('requests/show', {request: requestDoc});
  });
}

function index(req, res) {
    Request.find({}, function (err, requestDocs) {
    res.json("requests/index", {requests: requestDocs});
    });
  }