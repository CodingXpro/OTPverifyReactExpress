import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import userRoutes from './routes/userRoutes.js';

const app = express();

const port = process.env.PORT;
app.use(cors());
app.use(express.json());
app.use("/api/user", userRoutes);


app.listen(port, () => {
    console.log("server is running on port 8000");
})