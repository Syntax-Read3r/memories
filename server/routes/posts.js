// This file is not a module, so we can't use import. We need to use require.
// This is useful when you want to post a new post to the database.

import express from 'express';

import { getPost, createPost } from '../controllers/posts.js'; //Don't forget to add the .js, since this is node not react

// set up the router
const router = express.Router();

// add routes
router.get('/', getPost);
router.post('/', createPost);

export default router;