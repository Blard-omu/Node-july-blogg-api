// routes/blogRoutes.js
import express from 'express';
import { createBlog, getAllBlogs, getBlogById, updateBlog, deleteBlog } from '../controllers/blogController.js';
import upload from '../services/multer.js'



const router = express.Router();

// Endpoint to create a new blog
router.post('/blogs/create',  upload.single('image'), createBlog);

// Endpoint to get all blogs
router.get('/blogs/all', getAllBlogs);

// Endpoint to get a specific blog by _id
router.get('/blog/:_id', getBlogById);

// Endpoint to update a blog
router.put('/blog/:_id', updateBlog);

// Endpoint to delete a blog
router.delete('/blog/:_id', deleteBlog);

export default router;
