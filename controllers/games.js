import Game from '../models/game.js';

module.exports = {
    index,
    show,
}

function show(req, res) {
  console.log(req.user, '<---- req.user');
  console.log(req.session, '<---- req.session');

  Game.findById(req.params.id, function(err, gameDoc){
    res.json('requests/show', {game: gameDoc});
  });
}

function index(req, res) {
    Game.find({}, function (err, gameDocs) {
    res.json("requests/index", {games: gameDocs});
    });
  }