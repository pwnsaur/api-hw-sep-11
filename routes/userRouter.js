import express from 'express';
import {
	verifySessionTokenUser,
	verifySessionTokenAdmin,
} from '../authCheck/authCheck.js';
import {
	getAllUsers,
	getUserById,
	deleteUserById,
	updateUser,
	deleteEntiesByUserName,
} from '../controler/userControler.js';

const router = express.Router();

router.get('/get', verifySessionTokenAdmin, getAllUsers);

router.get('/get/:id', verifySessionTokenAdmin, getUserById);

router.delete('/delete/:id', verifySessionTokenUser, deleteUserById);

router.put('/update/:id', verifySessionTokenUser, updateUser);

router.delete('/delete', verifySessionTokenAdmin, deleteEntiesByUserName);

export default router;
