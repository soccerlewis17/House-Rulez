import Game from '../models/game.js';

export default {
    index,
    show,
}

function show(req, res) {
  console.log(req.user, '<---- req.user');
  console.log(req.session, '<---- req.session');

//   Game.findById(req.params.id, function(err, gameDoc){
//     res.json('requests/show', {game: gameDoc});
//   });
}

  async function index(req, res) {
    try {
      const games = await Game.find({})
      console.log('index function working')
      console.log(games, ' <--- games from index controller function')
      res.status(200).json({ data: games });
    } catch (err) {
      res.status(400).json({ err });
    }
  }