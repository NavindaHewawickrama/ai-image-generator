import express from 'express';
import { getAllPosts } from '../controllers/Posts';

const router = express.router();

router.get("/",getAllPosts);

export default router;
