import express from "express";
import dotenv from 'dotenv'
import connectDB from "./config/db.js";
import cookieParser from "cookie-parser";

import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);


dotenv.config();

const app = express();

const PORT = process.env.PORT || 3000;

// database connection
connectDB();

// setup ejs
app.set('view engine','ejs');

// middlewares
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use('/public', express.static(path.join(__dirname, 'public')));
app.use(cookieParser());



// import routes
import booksRoutes from './routes/booksRoutes.js';
import userRoutes from './routes/userRoutes.js'

app.use('/',booksRoutes);
app.use('/',userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on http:localhost:${PORT}`);
});
