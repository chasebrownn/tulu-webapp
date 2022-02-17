import express from 'express';
import { getUsers, createUser } from '../controllers/routes.js';

const router = express.Router();

// localhost:5000/posts
router.get('/', getUsers);
router.post('/', createUser);
//router.patch('/:id', updatePost);

export default router;