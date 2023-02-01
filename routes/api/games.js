import express from 'express';
const router = express.Router();
import gamesCtrl  from '../../controllers/games.js';
// /*---------- Public Routes ----------*/

router.get('/:gameId', gamesCtrl.show);
router.get('/', gamesCtrl.index)
export default router;