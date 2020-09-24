import mongoose from "mongoose";
import { log } from "../tools/logger";

import Story from "../models/Story";

const objectID = mongoose.Types.ObjectId;

/**
 * Story related Database queries
 */
export const getAllStories = async () => {
   return await Story.find({}).exec();
}

export const getStoryByID = async (id: string) => {
   return await Story.findById(objectID(id)).exec();
}

export const getStoriesByAuthorID = async (id: string) => {
   return await Story.find({ author: id }).exec();
}

export const getStoriesByCharacterID = async (id: string) => {
   return await Story.find({ characterID: id }).exec();
}

export const createStory = async (author: string, text: string) => {
   const story = new Story({ author, text });
   await story.save();
   return story.id;
}

export const updateStory = async (id: string, text: string) => {
   return await Story.findByIdAndUpdate(objectID(id), {text}).exec();
}

export const deleteStory = async (id: string) => {
   return await Story.findByIdAndDelete(objectID(id)).exec();
}
