import Game from '../models/game.js';

export default {
    index,
    show,
}

async function show(req, res) {
    try {
        const game = await Game.findById(req.params.gameId)
        res.status(200).json({ data: game });
    } catch (err) {
        res.status(400).json({ err });
    }
}

async function index(req, res) {
    try {
      const games = await Game.find({})
      res.status(200).json({ data: games });
    } catch (err) {
      res.status(400).json({ err });
    }
}