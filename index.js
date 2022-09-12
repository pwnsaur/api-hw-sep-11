import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import userRouter from './routes/userRouter.js';
import authRouter from './routes/authRouter.js';
import cookieParser from 'cookie-parser';

const app = express();
const port = 3000;

dotenv.config();

app.use(express.json());
app.use(cookieParser());

const connectionToDB = async () => {
	try {
		await mongoose.connect(process.env.MONGO_URL);
		console.log('connection successfull!');
	} catch (error) {
		throw error;
	}
};

// USER
app.use('/api', userRouter);

// AUTH
app.use('/api', authRouter);

app.listen(port, () => {
	connectionToDB();
	console.log(`serving @ ${port}`);
});
