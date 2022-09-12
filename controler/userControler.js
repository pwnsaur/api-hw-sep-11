import userModel from '../models/userModel.js';

export const getAllUsers = async (req, res) => {
	try {
		const allUsers = await userModel.find({}, { password: 0 });
		res.status(202).json(allUsers);
	} catch (error) {
		throw error;
	}
};

export const getUserById = async (req, res) => {
	try {
		const user = await userModel.findById(req.params.id);
		const { password, ...ramainingUserData } = user._doc;
		res.status(200).json(ramainingUserData);
	} catch (error) {
		throw error;
	}
};

export const deleteUserById = async (req, res) => {
	try {
		await userModel.findByIdAndDelete(req.params.id);
		res.status(200).send(`User is deleted`);
	} catch (error) {
		throw error;
	}
};

export const updateUser = async (req, res) => {
	try {
		const updateUser = await userModel.findByIdAndUpdate(
			req.params.id,
			{
				$set: req.body,
			},
			{ new: true }
		);
		res.status(200).json(updateUser);
	} catch (error) {
		throw error;
	}
};

export const deleteEntiesByUserName = async (req, res) => {
	try {
		await userModel.deleteMany({ userName: req.body.userName });
		res.status(200).send(`entries deleted`);
	} catch (error) {
		throw error;
	}
};
