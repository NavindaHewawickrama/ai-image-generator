import cors from 'cors';
import express from 'express';
import mongoose from 'mongoose';
import * as dotenv from 'dotenv';

dotenv.config;

const app = express();
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true }));

// error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || 'Something went wrong';
    return res.status(status).json({
        success: false,
        message,
        status
    });
});;

//default get 
app.get("/", async (req,res) => {
    res.status(200).json({
        success: true,
        message: "Hello GFG Developers!!"
    });
})
