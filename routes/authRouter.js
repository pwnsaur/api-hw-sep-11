import express from 'express';
import { createUser } from '../controler/authContoller.js';
import { loginUser } from '../controler/authContoller.js';

const router = express.Router();

router.post('/register', createUser);

router.post('/login', loginUser);

export default router;
