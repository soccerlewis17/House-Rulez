import Game from '../models/game.js';

export default {
    create,
    delete: deleteComment,
    update
}

function update(req, res) {
    Game.findOne({'comments._id': req.params.id}, function(err, gameDoc) {
        console.log(gameDoc, '=============== requestDoc from update function =========');
      const commentSubdoc = gameDoc.comments.id(req.params.id);
      if (!commentSubdoc.user.equals(req.user._id)) return res.json(`/games/${gameDoc._id}`);
      commentSubdoc.content = req.body.content;
      gameDoc.save(function(err) {
        res.json(`/games/${gameDoc._id}`);
      });
    });
  }


function deleteComment(req, res){
    Game.findOne({'comments._id': req.params.id, 'comments.user': req.user._id}, function (err, gameDoc) {
        if (!gameDoc) return res.json('/games');

        gameDoc.comments.remove(req.params.id);

        gameDoc.save(function(err){
            if(err) return res.send('err, check terminal fix this');
            res.json(`/games/${gameDoc._id}`)
          })
    })
}

function create(req, res){
    Game.findById(req.params.id, function (err, gameDoc) {
        if (err) {
          console.log(err);
          return res.send("error from create comments, check the terminal");
        }
        req.body.user = req.user._id;
        req.body.userName = req.user.name;
        req.body.userAvatar = req.user.avatar;
        gameDoc.comments.push(req.body);
        gameDoc.save(function (err) {
        console.log(err, " <_ err from gameDoc.save callback")
        res.json(`/games/${req.params.id}`);
        });
      });
}