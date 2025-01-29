import { createError } from '../error.js';
import Post from '../models/Post.js';
import * as dotenv from 'dotenv';
import { createError } from '../error.js';
import { v2 as cloudinary } from 'cloudinary';

dotenv.config();

// // Configuration
// cloudinary.config({ 
//     cloud_name: 'dolgpldqe', 
//     api_key: '274981973863631', 
//     api_secret: '<your_api_secret>' // Click 'View API Keys' above to copy your API secret
// });

//get all posts

export const getAllPosts = async (req, res, next) => {
    try {
        const posts = await Post.find({});
        return res.status(200).json({ success: true, data: posts })
    } catch (error) {
        next(
            createError(
                error.status,
                error?.response?.error?.message || error.message));
    }
}