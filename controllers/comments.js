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

async function create(req, res){
    console.log(req.user, " <- req.user", req.body)

    try {
      // adding our post information to the database
      const game = await Game.findById(req.params.id)
        req.body.user = req.user._id;
        req.body.userName = req.user.username;
        game.comments.push(req.body);
        game.save();

      res.status(201).json({game})

    } catch(err){
      res.status(400).json({err})
    }
}