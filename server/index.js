import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import dotenv from 'dotenv';
import postRoutes from "./routes/posts.js"
import userRoutes from "./routes/users.js"

const app = express();
dotenv.config();
app.use(bodyParser.json({ limit:"30mb", extended: true}));
app.use(bodyParser.urlencoded({ limit:"30mb", extended: true}));
app.use(cors());

app.use('/posts', postRoutes); 
app.use('/user', userRoutes);

const PORT = process.env.PORT || 8080;

mongoose.connect(process.env.CONNECTION_URL)
.then(() => app.listen(PORT, () => console.log(`Server running on Port: ${PORT}`)))
.catch((error) => console.log(error.message));