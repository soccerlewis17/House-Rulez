import express from 'express';
const router = express.Router();
import commentsCtrl from '../../controllers/comments.js';

// /*---------- Public Routes ----------*/

router.post('/games/:id/comments', commentsCtrl.create);
router.delete('/comments/:id', commentsCtrl.delete);
router.put('/comments/:id', commentsCtrl.update);
export default router;