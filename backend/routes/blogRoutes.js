import express from 'express';
import { get_blogs, get_A_blogs, post_blogs, update_blogs, delete_blogs } from '../controllers/blogController.js'

const router = express.Router();

router.get('/', get_blogs);
router.get('/:id', get_A_blogs);
router.post('/', post_blogs);
router.put('/:id', update_blogs);
router.delete('/:id', delete_blogs);

export default router;