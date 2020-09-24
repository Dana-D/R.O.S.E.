import mongoose from "mongoose";
import bcrypt from "bcrypt";
import { log } from "../tools/logger";

import User from "../models/User";

const objectID = mongoose.Types.ObjectId;

/**
 * User related Database queries
 */
export const getAllUsers = async () => {
   return await User.find({}).exec();
}

export const getUserByID = async (id: string) => {
   return await User.findById(objectID(id)).exec();
}

export const getUserByUserName = async (username: string) => {
   return await User.findOne({ userName: username }).exec();
}

export const createUser = async (username: string, password: string) => {
   const hash = await bcrypt.hash(password, 10);
   const user = new User({ userName: username, password: hash });
   await user.save()
   return user.id;
}

export const updateUser = async (id: string, password: string) => {
   const hash = await bcrypt.hash(password, 10);
   await User.findByIdAndUpdate(objectID(id), { password: hash }).exec();
}

export const deleteUser = async (id: string) => {
   await User.findByIdAndDelete(id).exec();
}